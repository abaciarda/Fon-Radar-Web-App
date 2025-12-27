export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    last_login_at: Date;
}

export interface UserResponse {
    id: number;
    username: string;
}

export interface RegisterRequest {
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string;
    user?: UserResponse;
}

export interface JWTPayload {
    userId: number;
    username: string;
}