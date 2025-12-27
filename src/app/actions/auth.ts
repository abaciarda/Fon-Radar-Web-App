'use server'

import { setTokenCookie } from "@/lib/session";
import { cookies } from "next/headers";

export async function registerUser(formData: FormData) {
    const response = await fetch(`${process.env.NEXT_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            repeatPassword: formData.get("repeatPassword")
        }),
    });

    const data = await response.json();

    if (data.success && data.token) {
        (await cookies()).set(setTokenCookie(data.token));
    }

    return data;
}

export async function loginUser(formData: FormData) {
    const response = await fetch(`${process.env.NEXT_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password")
        }),
    });

    const data = await response.json();

    if (data.success && data.token) {
        (await cookies()).set(setTokenCookie(data.token));
    }
    return data;
}
