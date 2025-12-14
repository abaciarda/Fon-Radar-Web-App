"use client"

import { useEffect, useRef, useState } from "react"
import { Category } from "@/types/Category"

type Props = {
    selected: Category
    onChange: (category: Category) => void
}

export default function FundCategories({ selected, onChange }: Props) {

  const categories: Category[] = [
    { id: "all", label: "Tüm Fonlar" },
    { id: "high-return", label: "Yüksek Getiri" },
    { id: "low-risk", label: "Düşük Riskli" },
  ]

  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-4">
      
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => {
            const isActive = selected.id === cat.id
            return (
                <button onClick={ (event) => onChange(cat) } key={cat.id} className={`w-full md:w-auto px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${ isActive ? "bg-black text-white border-black" : "border-gray-200 text-text-muted hover:bg-black hover:text-white" } `}>
                    {cat.label}
                </button>
            )
        })}
      </div>

      <div ref={ref} className="relative w-full md:w-[200px]">
        <button
          onClick={() => setOpen(!open)}
          className="
            w-full h-10 px-4 rounded-lg border border-gray-200
            flex items-center justify-between text-sm
            bg-white hover:bg-gray-50 transition
          "
        >
          {selected.label}
          <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
            ▾
          </span>
        </button>

        {open && (
          <div className="absolute left-0 top-full mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden z-20">
            {categories.map((cat) =>
                <button key={cat.id} onClick={() => { onChange(cat), setOpen(false) }} className={` w-full px-4 py-2 text-left text-sm transition ${ selected.id === cat.id ? "bg-black text-white" : "hover:bg-black hover:text-white" } `}>
                    {cat.label}
                </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
