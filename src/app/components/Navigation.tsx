"use client"

import { Menu, X, RadarIcon, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

import { useAuth } from "@/providers/AuthProvider"
import { logoutUser } from "../actions/auth"

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { user } = useAuth();
  const popoverRef = useRef<HTMLDivElement>(null);

  const navMenus = [
    { title: "Anasayfa", url: "/" },
    { title: "Fonlar", url: "/funds" },
    { title: "Hakkımızda", url: "/about" },
    { title: "Favorilerim", url: "/favorites" },
    !user && { title: "Giriş Yap", url: "/login" },
    !user && { title: "Kayıt Ol", url: "/register" }
  ].filter(Boolean) as { title: string; url: string }[];


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsSubMenuOpen(false);
      }
    }

    if (isSubMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubMenuOpen]);


  const isActive = (url: string) => pathname === url

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

        <Link href={"/"} className="flex items-center gap-2">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
            <RadarIcon />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-main">
            FonRadar
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navMenus.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={` h-10 px-5 rounded-full flex items-center text-sm font-medium transition-all ${isActive(item.url) ? "bg-primary text-white" : "text-text-muted hover:bg-primary hover:text-white"} `}
            >
              {item.title}
            </Link>
          ))}

          {user && (
            <div
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="cursor-pointer h-10 px-5 rounded-full flex items-center text-sm font-medium transition-all bg-primary/10 text-primary relative"
            >
              {user.username}
              {isSubMenuOpen && (
                <div ref={popoverRef} className="absolute top-15 right-0 w-48 rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">

                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <p className="text-sm font-semibold text-text-main">{user.username}</p>
                    <p className="text-xs text-text-muted">Hesap Ayarları</p>
                  </div>

                  <div className="flex flex-col p-2 gap-1">
                    <Link href="/profile" className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-text-main hover:bg-primary/10 hover:text-primary transition">
                      Ayarlar
                    </Link>

                    <button onClick={() => logoutUser()} className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition">
                      Çıkış Yap
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col p-4 gap-2">
            {navMenus.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                onClick={() => setOpen(false)}
                className={`h-11 px-4 rounded-xl flex items-center text-sm font-medium transition ${isActive(item.url) ? "bg-primary text-white" : "text-text-muted hover:bg-primary hover:text-white"} `}
              >
                {item.title}
              </Link>
            ))}
            {user && (
              <div onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} className="cursor-pointer h-10 px-5 rounded-full flex items-center text-sm font-medium transition-all bg-primary/10 text-primary relative">
                {user.username}
                <div className="absolute right-2">
                  {isSubMenuOpen && (
                    <ChevronUp size={20} />
                  )}
                  {!isSubMenuOpen && (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>
            )}
            {isSubMenuOpen && (
              <div className="flex flex-col gap-2">
                <Link href={'/settings'} className="h-11 px-4 rounded-xl flex items-center text-sm font-medium transition">
                  Ayarlar
                </Link>
                <button onClick={() => logoutUser()} className="cursor-pointer flex items-center h-11 px-4 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition">
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
