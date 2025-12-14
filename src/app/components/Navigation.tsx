import { Target } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
    const navMenus = [
        {
            title: "Fonlar",
            url: "/funds",
        },
        {
            title: "Hakkımızda",
            url: "/about",
        },
        {
            title: "Favorilerim",
            url: "/favorites"
        },
        {
            title: "Giriş Yap",
            url: "/login"
        },
        {
            title: "Kayıt Ol",
            url: "/register",
            isActive: true
        }
    ]
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-10 rounded-full bg-gray-200">
                        <Target />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-text-main">FonRadar</span>
                </div>
                <div className="flex items-center">
                    {navMenus.map((item) => (
                        <Link key={item.title} href={item.url} className={`text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-300 h-10 ${item.isActive ? ' bg-primary rounded-full px-5 flex items-center text-black' : 'hover:bg-primary rounded-full px-5 flex items-center hover:text-black'}`}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}