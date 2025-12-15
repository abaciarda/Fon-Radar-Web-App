"use client"
import { InfoIcon, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Line, LineChart } from "recharts";

export default function FavoriteFunds() {
    const positiveData = [
        { v: 0 },
        { v: 100 },
        { v: 19 },
        { v: 94 },
        { v: 100 },
    ];

    const negativeData = [
        { v: 0 },
        { v: 94 },
        { v: 46 },
        { v: 2 },
        { v: -100 },
    ];

    const examplePositiveFunds = [
        { name: "TLY", fullName: "Tera Portföy Birinci Serbest Fon" , guess: 4.32},
        { name: "DFI", fullName: "Atlas Portföy Serbest Fon", guess: 1.23},
        { name: "SNY", fullName: "ATLAS PORTFÖY SANAYİ SEKTÖRÜ HİSSE SENEDİ SERBEST FON (HİSSE SENEDİ YOĞUN FON)", guess: 6.73}
    ]

    const exampleNegativeFunds = [
        { name: "ZJI", fullName: "Ziraat Portföy İkinci Serbest Fon" , guess: 2.45},
        { name: "MUT", fullName: "Garanti Portföy Mutlak Getiri Hedefli Serbest Fon (HSYF)", guess: 2.45},
    ]

    return (
        <div className="flex flex-col">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl xl:text-5xl font-bold">Favori Fonlarım</p>
                        <p className="text-lg text-text-muted">Takip ettiğiniz fonlara ait yakın zamanlı veriler üzrinden oluşturulan tahmini göstergeler.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl shadow px-7 py-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="uppercase">Toplam Favori Fon</p>
                                <i className="ri-heart-line text-3xl text-primary"></i>
                            </div>
                            <p className="text-4xl font-bold text-primary">5</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl shadow px-7 py-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="uppercase">Pozitif Seyirde</p>
                                <TrendingUp className="text-green-600 size-8"/>
                            </div>
                            <p className="text-4xl font-bold text-green-600">3</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl shadow px-7 py-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="uppercase">Negatif Seyirde</p>
                                <TrendingDown className="text-red-600 size-8"/>
                            </div>
                            <p className="text-4xl font-bold text-red-600">2</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-6 gap-x-4 gap-y-6">
                        {examplePositiveFunds.map((fund) => (
                            <Link key={fund.name} href={`/funds/${fund.name}`} className="bg-white border border-gray-200 rounded-xl p-7 shadow flex flex-col gap-5 group hover:-translate-y-2 transition-all duration-300">
                                <div className="flex gap-3 relative overflow-hidden">
                                    <div className="w-14 min-w-[56px] h-14 rounded-2xl bg-gray-200" />
                                    <div className="flex flex-col gap-1 w-full overflow-hidden">
                                        <p className="text-2xl font-semibold group-hover:text-primary transition-colors">{fund.name}</p>
                                        <p className="text-text-muted text-sm truncate">{fund.fullName}</p>
                                    </div>
                                    <div className="absolute right-0 top-0">
                                    <i className="ri-star-fill text-2xl text-yellow-500 cursor-pointer"></i>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="flex flex-col gap-0.5 h-full">
                                        <p className="text-3xl font-bold text-green-600">+%{fund.guess}</p>
                                        <p className="text-text-muted text-sm mt-auto">Tahmini günlük getiri</p> 
                                    </div>
                                    <LineChart width={130} height={60} data={positiveData}>
                                        <Line
                                            type="monotone"
                                            dataKey="v"
                                            stroke="#16a34a"
                                            strokeWidth={3}
                                            dot={false}
                                            max={100}
                                        />
                                    </LineChart>
                                </div>
                                <hr />
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="flex items-center gap-1 text-sm text-text-muted">
                                        <InfoIcon className="text-primary" />
                                        <p>Son Güncelleme</p>
                                    </div>
                                    <p className="text-sm text-text-muted">15 Dakika Önce</p>
                                </div>
                            </Link>  
                        ))}
                        {exampleNegativeFunds.map((fund) => (
                            <Link key={fund.name} href={`/funds/${fund.name}`} className="bg-white border border-gray-200 rounded-xl p-7 shadow flex flex-col gap-5 group hover:-translate-y-2 transition-all duration-300">
                                <div className="flex gap-3 relative overflow-hidden">
                                    <div className="w-14 min-w-[56px] h-14 rounded-2xl bg-gray-200" />
                                    <div className="flex flex-col gap-1 w-full overflow-hidden">
                                        <p className="text-2xl font-semibold group-hover:text-primary transition-colors">{fund.name}</p>
                                        <p className="text-text-muted text-sm truncate">{fund.fullName}</p>
                                    </div>
                                    <div className="absolute right-0 top-0">
                                    <i className="ri-star-fill text-2xl text-yellow-500 cursor-pointer"></i>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="flex flex-col gap-0.5 h-full">
                                        <p className="text-3xl font-bold text-red-600">-%{fund.guess}</p>
                                        <p className="text-text-muted text-sm mt-auto">Tahmini günlük getiri</p> 
                                    </div>
                                    <LineChart width={130} height={60} data={negativeData}>
                                        <Line
                                            type="monotone"
                                            dataKey="v"
                                            stroke="#e7000b"
                                            strokeWidth={3}
                                            dot={false}
                                            max={100}
                                        />
                                    </LineChart>
                                </div>
                                <hr />
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="flex items-center gap-1 text-sm text-text-muted">
                                        <InfoIcon className="text-primary" />
                                        <p>Son Güncelleme</p>
                                    </div>
                                    <p className="text-sm text-text-muted">15 Dakika Önce</p>
                                </div>
                            </Link>  
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}