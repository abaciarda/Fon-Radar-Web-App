import pool from "@/lib/db";
import { AuthResponse } from "@/types/auth";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { setTokenCookie } from "@/lib/session";
import { registerSchema } from "@/app/schemas/registerSchema";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const parsed = registerSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json<AuthResponse>(
                {
                    success: false,
                    message: parsed.error.issues[0].message
                },
                { status: 400 }
            );
        }

        const { email, username, password } = parsed.data;

        const [isEmailExist] = await pool.query<RowDataPacket[]>(
            'SELECT id FROM users WHERE email = ?', [email]
        );

        const [isUsernameExist] = await pool.query<RowDataPacket[]>(
            'SELECT id FROM users WHERE username = ?', [username]
        );

        if (isEmailExist.length > 0) {
            return NextResponse.json<AuthResponse>(
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