import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
    return (
        <div className="flex flex-col">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl xl:text-5xl font-bold">Kullanım Şartları</p>
                        <p className="text-lg text-text-muted">FonRadar platformunu kullanmadan önce lütfen bu şartları dikkatlice okuyunuz. Bu sayfa, platformun kullanımına ilişkin temel kuralları ve sorumluluk sınırlarını açıklamaktadır.</p>
                    </div>
                    <hr />
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">1</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Genel Bilgilendirme</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            FonRadar, yatırım fonlarına ait verileri daha anlaşılır şekilde sunmak amacıyla geliştirilmiş bireysel ve öğretici bir platformdur. Platform üzerinde sunulan içerikler ticari bir hizmet niteliği taşımaz.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">2</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Yatırım Tavsiyesi Niteliği Taşımaması</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            FonRadar üzerinde yer alan hiçbir bilgi, yorum, analiz veya görsel yatırım tavsiyesi olarak değerlendirilmemelidir. Platformda sunulan bilgiler yalnızca genel bilgilendirme amaçlıdır. Kullanıcılar, platformda yer alan içeriklere dayanarak aldıkları yatırım kararlarının tüm sorumluluğunu kendileri üstlenir.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">3</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Veri Kaynakları ve Doğruluk</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Platformda sunulan veriler, kamuya açık ve üçüncü parti finansal veri kaynaklarından sağlanmaktadır. Veriler eş zamanlı olmayabilir ve zaman farkı içerebilir. Sunulan bilgilerin doğruluğu, eksiksizliği veya güncelliği garanti edilmez.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">4</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Sorumluluğun Sınırlandırılması</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            FonRadar; platformda yer alan bilgi, veri veya içeriklerin kullanımından doğabilecek doğrudan veya dolaylı zararlardan, veri kayıplarından, finansal kayıplardan veya teknik aksaklıklardan sorumlu tutulamaz.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">5</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Hizmetin Değiştirilmesi veya Sonlandırılması</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            FonRadar, platformun içeriğini, özelliklerini veya erişimini önceden bildirimde bulunmaksızın değiştirme, geçici olarak durdurma veya tamamen sonlandırma hakkını saklı tutar.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">6</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Kullanım Şartlarında Değişiklikler</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Bu kullanım şartları zaman zaman güncellenebilir. Güncellenmiş şartlar platform üzerinde yayınlandığı anda yürürlüğe girer.
                        </div>
                    </div>
                    <div className="bg-blue-100 border border-blue-300 shadow rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-3">
                        <div className="flex flex-col gap-1">
                           <p className="text-lg md:text-2xl font-bold">İletişim</p>
                            <div className="text-text-muted">
                               Kullanım şartları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.
                            </div> 
                        </div> 
                        <Link href={'mailto:info@fonradar.com'} className="bg-white group border border-gray-200 rounded-full flex items-center gap-2 px-8 py-4 text-primary hover:-translate-y-1 transition-all">
                            <MailIcon />
                            <p className="font-semibold relative top-[0.5px] group-hover:underline">info@fonradar.com</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}