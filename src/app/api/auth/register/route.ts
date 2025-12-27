import pool from "@/lib/db";
import { AuthResponse, RegisterRequest } from "@/types/auth";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { setTokenCookie } from "@/lib/session";

export async function POST(request: NextRequest) {
    try {
        const body: RegisterRequest = await request.json();

        const { email, username, password, repeatPassword } = body;

        if (!email || !username || !password || !repeatPassword) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Email, Kullanıcı adı ve şifre gereklidir." },
                { status: 400 }
            );
        };

        if (password !== repeatPassword) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Şifreler birbiriyle uyuşmuyor." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Geçersiz Email Formatı" },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Şifre en az 6 karakterden oluşmalıdır." },
                { status: 400 }
            )
        }

        const [isEmailExist] = await pool.query<RowDataPacket[]>(
            'SELECT id FROM users WHERE email = ?', [email]
        );

        const [isUsernameExist] = await pool.query<RowDataPacket[]>(
            'SELECT id FROM users WHERE username = ?', [username]
        );

        if (isEmailExist.length > 0) {
            return NextResponse.json(
                { success: false, message: "Bu email adresi zaten kullanılıyor." },
                { status: 409 }
            )
        }

        if (isUsernameExist.length > 0) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Bu kullanıcı adı zaten kullanılıyor." },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await pool.query<ResultSetHeader>(
            'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
            [email, username, hashedPassword]
        );

        const userId = result.insertId;

        const token = generateToken({ userId, username });

        const response = NextResponse.json<AuthResponse>(
            {
                success: true,
                message: 'Kayıt Başarılı',
                user: { id: userId, username },
            },
            { status: 201 }
        );

        response.cookies.set(setTokenCookie(token));

        return response;

    } catch (error) {
        console.error('Register error:', error);
        return NextResponse.json<AuthResponse>(
            { success: false, message: 'Sunucu hatası' },
            { status: 500 }
        );
    }
}