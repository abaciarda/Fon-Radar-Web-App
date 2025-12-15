import { RadarIcon } from "lucide-react";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex flex-col manrope-font">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-5 items-center justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center size-14 rounded-2xl bg-primary text-white">
                            <RadarIcon className="size-8"/>
                        </div>  
                        <p className="text-2xl font-bold">FonRadar</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="text-3xl font-extrabold">Giriş Yap</p>
                        <p className="text-text-muted text-center">Favori fonlarınızı takip etmek için hesabınıza giriş yapın.</p>
                    </div>
                    <form className="bg-white border border-gray-200 shadow mt-4 p-8 md:p-10 rounded-3xl max-w-[540px] w-full mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-lg">E-Posta</label>
                            <input type="email" name="email" id="email" placeholder="ornek@mail.com" className="bg-white p-4 rounded-2xl border border-gray-200 focus:ring-primary focus-visible:outline-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="font-medium text-lg">Şifre</label>
                            <input type="password" name="password" id="password" placeholder="********" className="bg-white p-4 rounded-2xl border border-gray-200 focus:ring-primary focus-visible:outline-primary" />
                        </div>
                        <div className="flex items-center justify-between -mt-4">
                            <label htmlFor="remember_me" className="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" id="remember_me" name="remember_me" className=" size-5 appearance-none rounded-md border-2 border-gray-300 bg-white checked:bg-primary checked:border-primary checked:before:content-['✓'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center checked:before:text-sm checked:before:font-bold transition focus:outline-none focus:ring-2 focus:ring-primary/30 "/>
                                <span className="text-sm text-text-muted">
                                    Beni Hatırla
                                </span>
                            </label>
                            <Link href={'/#'} className="text-sm text-primary font-bold hover:underline">Şifremi Unuttum</Link>
                        </div>
                        <button type="submit" className="bg-primary hover:bg-blue-600 transition-colors p-3 rounded-xl text-white font-medium text-lg cursor-pointer">
                            Giriş Yap
                        </button>
                    </form>
                    <p className="text-text-muted relative top-3">Hesabın yok mu? <Link href={'/register'} className="font-bold text-primary hover:underline ml-0.5">Kayıt ol</Link></p>
                </div>
            </div>
        </div>
    )
}