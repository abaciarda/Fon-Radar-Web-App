"use client"

import { Menu, X, RadarIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navMenus = [
    { title: "Fonlar", url: "/funds" },
    { title: "Hakkımızda", url: "/about" },
    { title: "Favorilerim", url: "/favorites" },
    { title: "Giriş Yap", url: "/login" },
    { title: "Kayıt Ol", url: "/register" },
  ]

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
              className={` h-10 px-5 rounded-full flex items-center text-sm font-medium transition-all ${ isActive(item.url) ? "bg-primary text-white" : "text-text-muted hover:bg-primary hover:text-white" } `}
            >
              {item.title}
            </Link>
          ))}
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
                className={` h-11 px-4 rounded-xl flex items-center text-sm font-medium transition ${ isActive(item.url) ? "bg-primary text-black" : "text-text-muted hover:bg-primary hover:text-black" } `}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
