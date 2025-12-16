import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function Privacy() {
    return (
        <div className="flex flex-col">
            <div className="relative w-full pt-16 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto p-5 flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-text-muted">Son Güncelleme: 16 Aralık 2025</p>
                        <p className="text-4xl xl:text-5xl font-bold">Gizlilik Politikası</p>
                        <p className="text-lg text-text-muted">Bu metin, FonRadar platformu kapsamında hangi verilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklamak amacıyla hazırlanmıştır. Platformu kullanarak bu politikayı kabul etmiş sayılırsınız.</p>
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
                            FonRadar, bireysel ve öğretici amaçlarla geliştirilmiş bir finansal veri görüntüleme platformudur. Platformu kullanan kullanıcıların gizliliğine saygı duyulur ve kişisel veriler yalnızca bu politika kapsamında işlenir.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">2</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Toplanan Veriler</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Toplanan veriler 3 ayrı kapsamda değerlendirilmektedir, bu kapsamlar şu şekildedir:
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <p className="text-text-muted font-bold text-lg">2.1</p>
                                </div>
                                <p className="text-lg md:text-2xl font-bold">Kullanıcı Tarafından Sağlanan Veriler</p>
                            </div>
                            <div className="px-13 text-text-muted">
                               Kayıt ve giriş işlemleri sırasında kullanıcılardan e-posta adresi ve parola bilgisi talep edilir. Parolalar güvenli biçimde şifrelenerek saklanır ve düz metin olarak tutulmaz.
                            </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <p className="text-text-muted font-bold text-lg">2.2</p>
                                </div>
                                <p className="text-lg md:text-2xl font-bold">Otomatik Teknik Veriler</p>
                            </div>
                            <div className="px-13 text-text-muted">
                                Platformun çalışması sırasında IP adresi, tarayıcı türü, cihaz bilgisi, işletim sistemi, sayfa görüntüleme istatistikleri ve ziyaret zamanı gibi teknik veriler otomatik olarak toplanabilir.
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <p className="text-text-muted font-bold text-lg">2.3</p>
                                </div>
                                <p className="text-lg md:text-2xl font-bold">Çerezler (Cookies)</p>
                            </div>
                            <div className="px-13 text-text-muted">
                                FonRadar, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanır. Bu çerezler; oturum yönetimi, tema tercihleri, favori fonlar ve analiz amaçlı kullanılabilir.
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">3</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Analiz ve Ölçüm Araçları</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Platformda Google Analytics ve benzeri üçüncü parti analiz araçları kullanılabilir. Bu araçlar, kullanıcı davranışlarını anonim ve istatistiksel olarak analiz etmeye yardımcı olur. Toplanan veriler kimlik tespiti amacıyla kullanılmaz.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">4</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Verilerin Kullanım Amaçları</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Toplanan veriler; platformun düzgün çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek, güvenliği artırmak ve performans analizleri yapmak amacıyla kullanılır. Veriler reklam, pazarlama veya ticari kazanç amacıyla kullanılmaz.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">5</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Verilerin Paylaşımı</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Kullanıcılara ait veriler üçüncü kişilere satılmaz, kiralanmaz veya ticari amaçla paylaşılmaz. Yalnızca yasal yükümlülükler doğrultusunda resmi mercilerle paylaşım yapılabilir.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">6</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Üçüncü Parti Hizmetler</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            FonRadar, finansal verileri üçüncü parti veri sağlayıcı API’ler aracılığıyla sunar. Bu servislerin kendi gizlilik politikaları geçerlidir ve FonRadar bu servislerin veri işleme süreçlerinden sorumlu değildir.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">7</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Kullanıcı Hakları</p>
                        </div>
                        <div className="px-13 text-text-muted">
                            Kullanıcılar, kendileriyle ilgili veriler hakkında bilgi talep edebilir, güncellenmesini isteyebilir veya hesaplarını silerek verilerinin kaldırılmasını talep edebilir.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow rounded-2xl p-7 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-text-muted font-bold text-lg">8</p>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">Politika Değişiklikleri</p>
                        </div>
                        <div className="px-13 text-text-muted">
                        FonRadar, bu gizlilik politikasını gerektiğinde güncelleyebilir. Güncel politika platformda yayınlandığı anda geçerli kabul edilir.
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