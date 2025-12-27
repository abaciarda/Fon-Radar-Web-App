import pool from "@/lib/db";
import { generateToken } from "@/lib/jwt";
import { AuthResponse } from "@/types/auth";
import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/app/schemas/loginSchema";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const parsed = loginSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        const { username, password } = parsed.data;

        const [users] = await pool.query<RowDataPacket[]>(
            'SELECT id, email, username, password FROM users WHERE username = ?',
            [username]
        );

        if (users.length === 0) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Kullanıcı adı veya şifre hatalı." },
                { status: 401 }
            );
        }

        const user = users[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json<AuthResponse>(
                { success: false, message: "Kullanıcı adı veya şifre hatalı." },
                { status: 401 }
            );
        }

        const token = generateToken({ userId: user.id, username: user.username });

        const response = NextResponse.json<AuthResponse>(
            {
                success: true,
                message: "Giriş başarılı",
                token,
                user: { id: user.id, username: user.username },
            },
            { status: 200 }
        );

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json<AuthResponse>(
            { success: false, message: "Sunucu hatası" },
            { status: 500 }
        );
    }
}
