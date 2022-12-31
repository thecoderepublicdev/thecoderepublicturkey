import Layout from '../components/layout';
import { Hero, References, Services } from '../components/Home/Home';
import TCRContainer from '../components/TCRContainer';


export default function Home() {
  const Meta = {
    title: "The Code Republic | Geleceği Kodluyoruz",
    description: "The Code Republic olarak dijital çözümler sunmanın yanı sıra kendi teknolojilerimizi geliştiriyor ve geleceği kodluyoruz.",
    tags: "the code republic, tcr, marka yönetimi, mobil uygulama geliştirme, e-ticaret sitesi, pazarlama, e-ticaret sitesi oluşturmak, sosyal medya tasarımları, grafik tasarım, fuar sitesi, fuar sitesi kurmak, kurumsal web sitesi satın al, kurumsal web sitesi oluşturma"
  };

  const ServicesList = [
    {
        icon: 'public',
        title: 'SEO Destekli ve Optimize Edilmiş Web Sitesi Hizmeti',
        description: 'İşletmenizin/markanızın arama motorlarında üst sıralarda yer alabilmesi için SEO destekli ve hızlı açılış için optimize edilmiş bir web sitesi kurabiliriz.'
    },
    {
        icon: 'smartphone',
        title: 'Mobil Uygulama Geliştirme & Desteği Hizmeti',
        description: 'İşletmeniz/markanız için bir mobil uygulama yapabilir veya mevcut mobil uygulamanız için geliştirme/yenileme/entegrasyon ve diğer yazılım desteği sağlayabiliriz.'
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

  return (
    <Layout title={Meta.title} description={Meta.description} tags={Meta.tags}>
        <Hero/>
        <References/>
        <TCRContainer>
          <Services 
            title="Hizmetlerimiz"
            subTitle="Size nasıl yardımcı olabiliriz?"
            description="Yılların deneyimiyle harmanlanmış hangi hizmetlerimizle markanızı/işinizi milyonlarca potansiyel müşteriye ulaştırmanıza yardımcı olabiliriz?"
            services={ServicesList}
          />
        </TCRContainer>
    </Layout>
  )
}
