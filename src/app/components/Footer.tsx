import { RadarIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-10 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl w-full px-5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-white">
                            <RadarIcon />
                        </div>
                        <p className="text-xl font-bold text-text-main">FonRadar</p>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                        FonRadar, yatırım fonlarının performansını takip etmeyi
                        kolaylaştıran bir bilgi platformudur. Sunulan veriler
                        yatırım tavsiyesi niteliği taşımaz.
                    </p>
                </div>

                {/* Fon Takibi */}
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold text-text-main">Fon Takibi</p>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        TLY Fon Takip
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        DFI Fon Takip
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        SNY Fon Takip
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Tüm Fonlar
                    </a>
                </div>

                {/* Hızlı Linkler */}
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold text-text-main">Hızlı Linkler</p>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Fon Performansları
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Güncel Fon Verileri
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Fon Karşılaştırma
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Fon Takip Listem
                    </a>
                </div>

                {/* Platform */}
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold text-text-main">Platform</p>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Hakkımızda
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Veri Kaynakları
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Kullanım Şartları
                    </a>
                    <a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">
                        Gizlilik Politikası
                    </a>
                </div>

            </div>
        </footer>

    )
}