'use client';

import { JWTPayload } from '@/types/auth';
import { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
    user: JWTPayload | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    user: JWTPayload | null;
    children: ReactNode;
}

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
