"use client"
import { ChartPieIcon, GemIcon, HandIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { LineChart, Line } from "recharts";

export default function Home() {
  const monthlyPerformanceFunds = [{ fundName: "TLY", fundPerf: 4.43 }, { fundName: "DFI", fundPerf: 5.43 },
  { fundName: "ZVU", fundPerf: 6.43 }, { fundName: "SNY", fundPerf: 8.43 }, { fundName: "FSU", fundPerf: 2.43 }
  ]
  const data = [
    { v: 0 },
    { v: 100 },
    { v: 19 },
    { v: 94 },
    { v: 13 },
    { v: 18 },
    { v: 46 },
  ];

  const infoCards = [
    {
      title: "Anlık Güncellemeler",
      description: "Fonlara ait performans verileri düzenli olarak güncellenir. Veriler yaklaşık 15 dakikalık gecikmeyle gösterilir.",
      icon: <ZapIcon />
    },
    {
      title: "Şeffaf Veri Sunumu",
      description: "Fon verileri açık ve anlaşılır biçimde sunulur. Yorum, yönlendirme veya yatırım tavsiyesi içermez.",
      icon: <ChartPieIcon />
    },
    {
      title: "Hızlı ve Erişilebilir",
      description: "Fon performansını tek ekranda hızlıca takip edebilirsiniz. Karar mekanizmasına müdahale etmez, yalnızca görünürlük sağlar.",
      icon: <HandIcon />
    },
    {
      title: "Fonlara Özel Kapsam",
      description: "Sistem yalnızca yatırım fonlarına odaklanır. Diğer finansal araçlar bilinçli olarak kapsam dışı bırakılmıştır.",
      icon: <GemIcon />
    }
  ]

  return (
    <div className="flex flex-col">
      <div className="relative w-full pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 max-w-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight text-text-main">
                  Gerçek Zamanlı Fon Takibi,{" "}
                  <span className="relative inline-block z-10 before:absolute before:-bottom-2 before:left-0 before:w-full before:h-3 before:bg-primary/40 before:-z-10">
                    Doğru
                  </span>{" "}
                  ve Hızlı.
                </h1>

                <p className="text-lg text-text-muted leading-relaxed max-w-md">
                  Yatırım fonlarının tahmini getirilerini temiz ve şeffaf verilerle takip edin.
                  Gereksiz kalabalık yok, yalnızca ihtiyacınız olan rakamlar.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={'/funds'} className="flex h-12 items-center justify-center px-8 rounded-full bg-primary text-text-main text-base font-bold shadow-sm hover:translate-y-[-6px] transition-transform">
                  Tüm Fonlara Göz At
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-square lg:aspect-4/3 rounded-3xl overflow-hidden bg-background-softblue/50 flex items-center justify-center p-2 lg:p-12">
              <div className="relative w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                  <div className="py-1 w-20 bg-gray-100 rounded-full text-center text-sm px-4">BIST100</div>
                  <div className="h-8 w-40 flex items-center justify-center text-sm bg-softblue rounded-full">Aylık Performans</div>
                </div>
                <div className="flex-1 flex items-end justify-between gap-2 px-2">
                  {monthlyPerformanceFunds.map((fund) => (
                    <div key={fund.fundName} className="flex items-center justify-center font-bold w-full bg-blue-500/40 rounded-t-lg h-[55%] hover:h-[60%] transition-all duration-500 relative group">
                      <p>{fund.fundName}</p>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        +{fund.fundPerf}%
                      </div>
                    </div>
                  ))}

                </div>
                <div className="flex gap-4 -mt-4 w-full">
                  <div className="py-1.5 w-1/2 bg-gray-100 rounded-xl text-center">Referans Tarih</div>
                  <div className="py-1.5 w-1/2 bg-gray-100 rounded-2xl text-center">13.12.2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="relative w-full pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto p-5 flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-bold leading-[1.1] tracking-tight text-text-main">Anlık Fon Tahminleri</p>
            <p className="text-text-main text-lg">Popüler 3 adet fonun anlık getiri tahmini aşağıdaki gibidir.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {monthlyPerformanceFunds.slice(0, 3).map((fund) => (
              <Link href={`/funds/${fund.fundName}`} key={fund.fundName} className="p-7 bg-white rounded-2xl drop-shadow-sm border border-gray-200 group flex flex-col gap-5 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gray-200 rounded-2xl"></div>
                  <div className="bg-gray-200 rounded-full py-1 px-4 text-green-800 text-sm font-bold">
                    {fund.fundPerf} %
                  </div>
                </div>
                <p className="text-2xl font-bold leading-[1.1] group-hover:text-yellow-500 transition-colors">{fund.fundName}</p>
                <LineChart width={"100%"} height={30} data={data}>
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={false}
                    max={100}
                  />
                </LineChart>
              </Link>
            ))}

          </div>
        </div>
      </div>
      <hr />
      <div className="relative w-full pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto p-5 flex flex-col gap-16">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-bold leading-[1.1] tracking-tight text-text-main">En İyi Performans Gösteren 3 Fon</p>
            <p className="text-text-main text-lg">Son 3 aylık performans raporlarına göre hazırlanmıştır.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {monthlyPerformanceFunds.slice(0, 3).map((fund) => (
              <Link href={`/funds/${fund.fundName}`} key={fund.fundName} className="p-7 bg-white rounded-2xl drop-shadow-sm border border-gray-200 group flex flex-col hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-2xl"></div>
                    <p className="text-xl font-bold group-hover:text-yellow-500 transition-colors">{fund.fundName}</p>
                  </div>
                  <div className="bg-gray-200 rounded-full py-1 px-4 text-green-800 text-sm">
                    +1.2%
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href={'/funds'} className="flex w-max mx-auto h-12 items-center justify-center px-8 rounded-full bg-primary text-text-main text-base font-bold shadow-sm hover:translate-y-[-5px] transition-transform">
            Tüm Fonlara Göz At
          </Link>
        </div>
      </div>
      <div className="relative w-full pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto p-5 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 max-w-xl">
              <div className="flex flex-col gap-4">
                <div className="py-1.5 px-4 bg-gray-200 rounded-full w-max flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-text-muted text-sm">Neden FonRadar?</p>
                </div>

                <h2 className="text-4xl xl:text-5xl font-bold text-text-main leading-tight">
                  Fon performansını anlık verilerle sade ve şeffaf biçimde izleyin.
                </h2>

                <p className="text-lg text-text-muted leading-relaxed">
                  FonRadar, fonlara ait güncel performans verilerini anlaşılır bir yapıda sunar.
                  Herhangi bir yönlendirme veya tavsiye sunmaz; yalnızca veriyi daha net görmenizi sağlar.
                </p>
              </div>
            </div>
            <div className="relative w-full md:aspect-square xl:aspect-4/3 rounded-3xl overflow-hidden grid lg:grid-cols-2 p-1 gap-4">
              {infoCards.map((card, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl drop-shadow-sm border border-gray-200 flex flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
                      {card.icon}
                    </div>
                    <p className="text-xl font-bold"></p>
                  </div>
                  <p className="text-lg font-bold">{card.title}</p>
                  <p className="lg:-mb-20 text-text-muted text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
