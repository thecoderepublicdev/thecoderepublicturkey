import Layout from "../components/layout";
import TCRContainer from "../components/TCRContainer";
import PricingCard from "../components/cards/PricingCard";
import Thumbnail from '../src/thumbnails/the_code_republic_our_services_thumbnail.webp';

export default function OurServices() {
    const PageMeta = {
        title: 'Hizmetlerimiz | The Code Republic',
        description: 'Marka Yönetimi, Mobil Uygulama Geliştirme, E-Ticaret Sitesi, Kurumsal Web Sitesi, Fuar Web Sitesi, Grafik Tasarım Hizmeti, Sosyal Medya Tasarımları ve daha fazlası The Code Republic\'te!',
        tags: "marka yönetimi, mobil uygulama geliştirme, e-ticaret sitesi, pazarlama, e-ticaret sitesi oluştur, sosyal medya tasarımları, grafik tasarım, fuar sitesi, fuar sitesi yap, kurumsal web sitesi satın al, kurumsal web sitesi oluştur"
    };

    const Services = [
        {
            title: 'Kurumsal Web Sitesi Hizmeti',
            description: "Markanızın kimliğine uygun bir web sitesi ile dijital dünyada yerinizi alın",
            price: 1200,
            sale: {
                active: false,
                price: 900
            },
            features: [
                "Arama Motorları ile Entegrasyon",
                "Markaya Özel Arayüz Tasarımı",
                "Anında İndeksleme",
                "Mobil Uyumluluk",
                "SEO Desteği",
            ]
        },
        {
            title: 'E-Ticaret Sitesi Hizmeti',
            description: "Markanızın kimliğine uygun bir web sitesi ile dijital dünyada yerinizi alın",
            price: 2000,
            sale: {
                active: false,
                price: 900
            },
            features: [
                "Arama Motorları ile Entegrasyon",
                "Markaya Özel Arayüz Tasarımı",
                "Anında İndeksleme",
                "Mobil Uyumluluk",
                "SEO Desteği",
                "Instagram ve Facebook Mağaza entegrasyonu"
            ]
        },
        {
            title: 'Mobil Uygulama Hizmeti',
            description: "Markanızın kimliğine uygun bir web sitesi ile dijital dünyada yerinizi alın",
            price: 4000,
            sale: {
                active: false,
                price: 900
            },
            features: [

            ]
        },
    ];
    
    return(
        <Layout title={PageMeta.title} description={PageMeta.description} tags={PageMeta.tags} thumbnail={Thumbnail}>
            <TCRContainer>
                <div>
                    {Services.map((service, key) => {return(
                        <PricingCard
                            key={key}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            isSale={service.sale}
                            features={service.features}
                        />
                    )})}
                </div>
            </TCRContainer>
        </Layout>
    )
}