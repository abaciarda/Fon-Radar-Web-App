import { cookies } from 'next/headers';
import { verifyToken } from './jwt';
import { JWTPayload } from '@/types/auth';

export async function getTokenFromCookies(): Promise<string | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');
    return token?.value || null;
}

export function setTokenCookie(token: string) {
    return {
        name: 'auth-token',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict' as const,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    };
}

export function clearTokenCookie() {
    return {
        name: 'auth-token',
        value: '',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict' as const,
        maxAge: 0,
        path: '/',
    };
}

export async function getCurrentUser(): Promise<JWTPayload | null> {
    const token = await getTokenFromCookies();
    if (!token) return null;
    return verifyToken(token);
}
