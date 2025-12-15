import { ClockIcon, DatabaseIcon, EyeIcon, InfoIcon, TargetIcon, UsersIcon } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl xl:text-5xl font-bold">FonRadar Nedir?</p>
                        <p className="text-lg text-text-muted">Fon verilerini daha iyi anlamak için geliştirilmiş bireysel ve öğretici bir proje.</p>
                        <p className="pt-4 text-text-muted text-lg">Bu platform, yatırım fonlarının yakın zamanlı veriler üzerinden hesaplanan tahmini performanslarını daha anlaşılır hale getirmek amacıyla geliştirilmiştir.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl shadow p-7 flex flex-col gap-6">
                            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                                <TargetIcon className="text-primary" />
                            </div>
                            <p className="text-xl font-bold">Neyi Amaçlıyor?</p>
                            <p className="text-text-muted -mt-4">
                                Kamuya açık ve üçüncü parti finansal veri kaynaklarından elde edilen veriler analiz edilerek tahmini göstergeler oluşturulmaktadır.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl shadow p-7 flex flex-col gap-6">
                            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                                <UsersIcon className="text-primary" />
                            </div>
                            <p className="text-xl font-bold">Kimin İçin?</p>
                            <p className="text-text-muted -mt-4">
                                Finansal verileri öğrenmek isteyen, fonları daha iyi analiz etmek isteyen bireysel kullanıcılar için.
                            </p>
                        </div>
                    </div>

                    <div className="px-14 py-12 border border-blue-300 bg-blue-100 rounded-xl flex items-center gap-8">
                        <div className="w-16 min-w-[64px] h-16 bg-white rounded-2xl flex items-center justify-center">
                            <InfoIcon className="text-blue-500 size-7"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl font-bold">Yatırım Tavsiyesi Değildir.</p>
                            <p className="text-text-muted">Bu platformda yer alan tüm veriler yalnızca bilgilendirme amaçlıdır. Sunulan içerikler herhangi bir yatırım tavsiyesi niteliği taşımaz.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl shadow p-7 flex flex-col gap-6 md:col-span-2">
                            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                                <DatabaseIcon className="text-primary" />
                            </div>
                            <p className="text-xl font-bold">Veri Kaynağı</p>
                            <p className="text-text-muted -mt-4">
                               Kamuya açık ve üçüncü parti finansal veri kaynaklarından elde edilen bilgiler kullanılmaktadır.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl shadow p-7 flex flex-col gap-6 md:col-span-2">
                            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                                <ClockIcon className="text-primary" />
                            </div>
                            <p className="text-xl font-bold">Güncellenme Sıklığı</p>
                            <p className="text-text-muted -mt-4">
                            Gösterilen veriler yaklaşık <b>15–20 dakika</b> aralıklarla güncellenen yakın zamanlı veriler üzerinden oluşturulmaktadır.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl shadow p-7 flex flex-col gap-6 col-span-1 md:col-span-4 lg:col-span-2">
                            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                                <EyeIcon className="text-primary" />
                            </div>
                            <p className="text-xl font-bold">Şeffaflık</p>
                            <p className="text-text-muted -mt-4">
                                Platform tamamen öğretici amaçlarla geliştirilmiştir ve herhangi bir ticari hizmet sunmaz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}