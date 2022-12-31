import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import SectionHeader from '../components/SectionHeader';
import IconBox from '../components/IconBox';

function Services() {
    const Content = {
        title: 'Hizmetlerimiz',
        subTitle: 'Size nasıl yardımcı olabiliriz?',
        description: 'Yılların deneyimiyle harmanlanmış hangi hizmetlerimizle markanızı/işinizi milyonlarca potansiyel müşteriye ulaştırmanıza yardımcı olabiliriz?',
    };

    const Services = [
        {
            icon: 'public',
            title: 'SEO Destekli ve Optimize Edilmiş Web Sitesi Hizmeti',
            description: 'İşletmenizin/markanızın arama motorlarında üst sıralarda yer alabilmesi için SEO destekli ve hızlı açılış için optimize edilmiş bir web sitesi kurabiliriz.',
        },
        {
            icon: 'smartphone',
            title: 'Mobil Uygulama Geliştirme & Desteği Hizmeti',
            description: 'İşletmeniz/markanız için bir mobil uygulama yapabilir veya mevcut mobil uygulamanız için geliştirme/yenileme/entegrasyon ve diğer yazılım desteği sağlayabiliriz.',
        },
        {
            icon: 'design_services',
            title: 'Kullanıcı Arayüzü Tasarımı (UI & UX Design) Hizmeti',
            description: 'Marka/işletme ve startup projeleriniz için Kullanıcı Deneyimi ve Kullanıcı Tasarımı konularında sizinle birlikte çalışabiliriz.',
        },
        {
            icon: 'design_services',
            title: 'Grafik Tasarım Hizmeti',
            description: 'Tüm sosyal medya tasarımlarınızı, kampanya görsellerinizi, baskı tasarımlarınızı yapabiliriz.',
        },
        {
            icon: 'terminal',
            title: 'Entegrasyon Hizmeti',
            description: 'Google Maps başta olmak üzere arama motorlarının harita servislerine markanızı/işletmenizi ekleyebilir, mevcut e-ticaret siteleriniz için Instagram & Facebook Shop entegrasyonu yapabiliriz.',
        },
        {
            icon: 'badge',
            title: 'Marka Yönetimi (sadece B2B)',
            description: 'Markanızı/işinizi yönetebilir; kurumsal kimlikten pazarlamaya kadar tüm sorumluluğu profesyonel ellere bırakabilirsiniz.',
        },
    ];
    
    return(
        <div className="py-12 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subTitle={Content.subTitle}
                    title={Content.title}
                    description={Content.description}
                />
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {
                            Services.map((service, key) => {
                                return(
                                    <IconBox
                                        key={key}
                                        icon={service.icon}
                                        title={service.title}
                                        description={service.description}
                                    />
                                )
                            })
                        }
                    </dl>
                </div>
            </div>
        </div>        
    )
}

export default Services;