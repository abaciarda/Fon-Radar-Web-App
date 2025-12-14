"use client"
import { Category } from "@/types/Category";
import { useState } from "react";
import FundCategories from "./fund-categories";

export default function FundsPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>({
        id: "all",
        label: "Tüm Fonlar",
    })

    const exampleFunds = [
        { name: "TLY", fullName: "Tera Portföy Birinci Serbest Fon" ,price: "2.773,27", guess: 2.45, income: 1.2 },
        { name: "DFI", fullName: "Atlas Portföy Serbest Fon" ,price: "2,19597", guess: 2.45, income: 1.2 },
        { name: "SNY", fullName: "ATLAS PORTFÖY SANAYİ SEKTÖRÜ HİSSE SENEDİ SERBEST FON (HİSSE SENEDİ YOĞUN FON)", price: "1,463126", guess: 2.45, income: 1.2 }
    ]
    return (
        <div className="flex flex-col">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl xl:text-5xl font-bold">Tüm Fonlar</p>
                        <p className="text-lg text-text-muted">Günlük getiriler ve FonRadar tahminleri</p>
                    </div>
                    <FundCategories selected={selectedCategory} onChange={setSelectedCategory} />
                    <div className="grid md:grid-cols-6 xl:grid-cols-6 gap-5 pt-8">
                        {exampleFunds.map((fund) => (
                            <div key={fund.name} className="flex flex-col gap-3 col-span-3 xl:col-span-2 bg-white border border-gray-200 rounded-2xl shadow p-8 truncate overflow-hidden hover:-translate-y-2 transition-all">
                                <div className="flex gap-3">
                                    <div className="w-14 min-w-[56px] h-14 rounded-lg bg-gray-200" />
                                    <div className="flex flex-col gap-1 w-full overflow-hidden">
                                        <p className="text-2xl font-semibold">{fund.name}</p>
                                        <p className="text-text-muted text-sm truncate">{fund.fullName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between pt-2">
                                    <div className="flex flex-col gap-1">
                                        <p className="uppercase text-text-muted">Fiyat</p>
                                        <p className="font-bold text-xl">₺{fund.price}</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="uppercase text-text-muted">FR Tahmini</p>
                                        <p className="font-semibold text-xl text-green-600 text-right">+{fund.guess}%</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3">
                                    <p className="text-text-muted">Günlük Getiri</p>
                                    <div className="px-4 py-0.5 bg-gray-200 rounded-full">
                                        <p className="text-green-600 text-sm font-medium">+{fund.income}%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}