import { RadarIcon } from "lucide-react";
import Link from "next/link";
import { registerUser } from "../actions/auth";

export default function Register() {
    return (
        <div className="flex flex-col manrope-font">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-5 items-center justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center size-14 rounded-2xl bg-primary text-white">
                            <RadarIcon className="size-8" />
                        </div>
                        <p className="text-2xl font-bold">FonRadar</p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="text-3xl font-extrabold">Kayıt Ol</p>
                        <p className="text-text-muted text-center">Favori fonlarınızı takip etmek için yeni bir hesap oluşturun </p>
                    </div>
                    <form action={registerUser} className="bg-white border border-gray-200 shadow mt-4 p-8 md:p-10 rounded-3xl max-w-[540px] w-full mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username" className="font-medium text-lg">Kullanıcı Adı</label>
                            <input type="text" name="username" id="username" placeholder="Kullanıcı adınız..." className="bg-white p-4 rounded-2xl border border-gray-200 focus:ring-primary focus-visible:outline-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-lg">E-Posta</label>
                            <input type="email" name="email" id="email" placeholder="ornek@mail.com" className="bg-white p-4 rounded-2xl border border-gray-200 focus:ring-primary focus-visible:outline-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="font-medium text-lg">Şifre</label>
                            <input type="password" name="password" id="password" placeholder="********" className="bg-white p-4 rounded-2xl border border-gray-200 focus:ring-primary focus-visible:outline-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="repeatPassword" className="font-medium text-lg">Şifre Tekrar</label>
                            <input type="password" name="repeatPassword" id="repeatPassword" placeholder="********" className="bg-white p-4 rounded-2xl border border-gray-200 focus:ring-primary focus-visible:outline-primary" />
                        </div>
                        <button type="submit" className="bg-primary hover:bg-blue-600 transition-colors p-3 rounded-xl text-white font-medium text-lg cursor-pointer">
                            Kayıt Ol
                        </button>
                    </form>
                    <p className="text-text-muted relative top-3">Hesabın var mı?<Link href={'/login'} className="font-bold text-primary hover:underline ml-0.5"> Giriş yap</Link></p>
                </div>
            </div>
        </div>
    )
}