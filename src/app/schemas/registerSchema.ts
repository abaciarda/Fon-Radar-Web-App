import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("Geçersiz Email Formatı"),
    username: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalıdır"),
    password: z.string().min(6, "Şifre en az 6 karakterden oluşmalıdır"),
    repeatPassword: z.string()
}).refine(
    (data) => data.password === data.repeatPassword,
    {
        message: "Şifreler birbiriyle uyuşmuyor",
        path: ["repeatPassword"]
    }
);

export type RegisterSchema = z.infer<typeof registerSchema>;
