"use client"

import { TrendingDown, TrendingUp } from "lucide-react";
import { useParams } from "next/navigation"
import HistoricalPerformanceChart from "./HistoricalPerformanceChart";

export default function FundPage() {
    const params = useParams<{ fundName: string }>();
    
    const exampleFund = { name: "TLY", fullName: "Tera Portföy Birinci Serbest Fon" ,price: "2.773,27", guess: 2.45, income: 1.2 };
    const exampleRates = [
        {
            title: "1 Haftalık",
            rate: 0.85,
        },
        {
            title: "1 Aylık",
            rate: 4.94,
        },
        {
            title: "3 Aylık",
            rate: 9.94,
        },
        {
            title: "6 Aylık",
            rate: 1.83
        },
        {
            title: "YTD",
            rate: 19.83
        },
        {
            title: "1 Yıllık",
            rate: 65.83
        }
    ]

    const positiveStocks = [
        { name: "Tera", contribution: 1.27 }, { name: "TRHOL", contribution: 0.29 }, { name: "TEHOL", contribution: 0.2 }, { name: "PEKGY", contribution: 0.1 }
    ]

    const negativeStocks = [
        { name: "DSTKF", contribution: -2.27 }, { name: "SMRVA", contribution: -0.72 }, { name: "TURSG", contribution: -1.25 }
    ]

    const stockDistribution = [
        { name: "Tera", percentage: 22 },
        { name: "TRHOL", percentage: 14 },
        { name: "TEHOL", percentage: 13 },
        { name: "PEKGY", percentage: 9 },
        { name: "DSTKF", percentage: 18 },
        { name: "SMRVA", percentage: 12 },
        { name: "TURSG", percentage: 12 },
      ]


    return (
        <div className="flex flex-col">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="flex gap-3">
                            <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                            <div className="flex flex-col gap-0">
                                <p className="text-4xl font-bold">{exampleFund.name}</p>
                                <p>{exampleFund.fullName}</p>
                                <div className="flex items-center gap-2 mt-auto font-semibold">
                                    <p>FR Anlık Tahmin:</p> <p className="text-green-600 font-bold">+1.2%</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-full md:w-auto pt-5 md:pt-0 items-end">
                            <div className="flex items-center gap-1 text-5xl font-bold text-green-600">
                                <p>+2.45%</p>
                                <TrendingUp className="size-12" />
                            </div>
                            <div className="flex items-center justify-end gap-1">
                                <p className="text-text-muted text-sm">Açıklanan Tarih:</p>
                                <p className="font-semibold text-black/70">14.12.2025</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-5">
                        <p className="text-xl font-bold">Performans Özeti</p>
                        <div className="grid md:grid-cols-12 gap-4">
                            {exampleRates.map((rate) => (
                                <div key={rate.title} className="p-4 bg-white border border-gray-200 rounded-2xl col-span-6 lg:col-span-2 flex flex-col gap-2">
                                    <p className="text-sm font-bold text-text-muted">{ rate.title }</p>
                                    <p className="text-lg font-bold text-green-600">+{rate.rate}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <HistoricalPerformanceChart />
                    </div>
                    <div className="grid lg:grid-cols-3 gap-7 pt-5">
                        <div className="flex flex-col gap-3">
                            <p className="text-xl font-bold">Fona Pozitif Katkı Sağlayanlar</p>
                            {positiveStocks.map((stock, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-200"></div>    
                                        <p className="text-lg font-semibold">{stock.name}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-green-600 font-bold">+{stock.contribution}%</p>
                                        <TrendingUp className="text-green-600"/>
                                    </div>
                                </div>  
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-xl font-bold">Fona Negatif Katkı Sağlayanlar</p>  
                            {negativeStocks.map((stock, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-200"></div>    
                                        <p className="text-lg font-semibold">{stock.name}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-red-600 font-bold">{stock.contribution}%</p>
                                        <TrendingDown className="text-red-600"/>
                                    </div>
                                </div>  
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-xl font-bold">Fon Hisse Dağılımı</p>  
                            {stockDistribution.sort((a,b) => b.percentage - a.percentage).map((stock, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-200"></div>    
                                        <p className="text-lg font-semibold">{stock.name}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-black font-bold">{stock.percentage}%</p>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                    <div className="pt-10 mt-10 border-t border-gray-200">
                        <p className="text-xs text-text-muted leading-relaxed text-center">
                            Bu sayfada yer alan veriler <span className="font-medium text-black/70">Yahoo Finance</span> kaynaklıdır.
                            FonRadar, verilerin doğruluğu veya güncelliği konusunda herhangi bir sorumluluk kabul etmez.
                            Buradaki bilgiler yatırım tavsiyesi değildir.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}