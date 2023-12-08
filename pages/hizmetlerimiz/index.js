import Layout from "@components/layout";
import ServiceBox from "@components/services/ServiceBox";


const Services = [
    {
        title: 'Kurumsal İnternet Sitesi',
        description: 'Potansiyel müşterilerinize ulaşın, markanızı tanıtın',
        path: '/hizmetlerimiz/kurumsal-internet-sitesi'
    },
    {
        title: 'E-Ticaret İnternet Sitesi',
        description: 'Potansiyel müşterilere ulaşabileceğiniz ve cironuzu yükseltebileceğiniz internet sitesi',
        path: '/hizmetlerimiz/kurumsal-internet-sitesi'
    },
    {
        title: 'Mobil Uygulama',
        description: 'Markanız/şirketiniz/işletmeniz için mobil uygulama',
        path: '/hizmetlerimiz/kurumsal-internet-sitesi'
    },
    {
        title: 'Şirket içi Özel Yazılım',
        description: 'Şirketinizin ihtiyaç duyduğu ve iş yükünü azaltan özel yazılımlar',
        path: '/hizmetlerimiz/kurumsal-internet-sitesi'
    },
    {
        title: 'Grafik Tasarım',
        description: 'Sosyal medya veya baskılı ürün tasarımları',
        path: '/hizmetlerimiz/kurumsal-internet-sitesi'
    },
]
export default function ServicesPage() {
    return(
        <Layout>
            <div className="container max-w-screen-xl mx-auto">
                <div className="p-4 grid gap-4">
                    <h1 className="font-bold text-6xl text-brand-primary">The Code Republic ile Dijital Çözümler</h1>
                    <p className="text-gray-500">
                        Markanızın/işletmenizin tüm dijital süreçlerini The Code Republic ile profesyonelleştirin.
                    </p>
                </div>

                <div className="grid gap-4 p-4">
                    {Services.map((service, key) => (
                        <ServiceBox key={key} url={service.path}>
                            <ServiceBox.Name>{service.title}</ServiceBox.Name>
                            <ServiceBox.Description>{service.description}</ServiceBox.Description>
                        </ServiceBox>
                    ))}
                </div>
            </div>
        </Layout>
    )
}