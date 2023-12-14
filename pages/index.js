import Masthead from "@components/home/Masthead";
import Layout from "../components/layout";
import LogoCloud from "@components/home/LogoCloud";
import ServiceSection from "@components/home/ServiceSection";


const ServiceList = [
  {
    id: 1,
    title: 'Kurumsal İnternet Sitesi',
    description: 'Tabanlığı ve profesyonelliği ile öne çıkan kurumsal internet sitesi, şirketin dijital varlığını güçlendiren bir araçtır. Modern iş dünyasında, potansiyel müşterilerle etkileşimde bulunmanın ve marka bilinirliğini artırmanın önemli bir yolu olarak öne çıkar. Şirketin ürün ve hizmetlerini detaylı bir şekilde tanıtan, kullanıcı dostu arayüzü ile ziyaretçilere kolaylık sağlayan bu platform, kurumsal kimliği yansıtarak güven oluşturur. Aynı zamanda, güncel içerikler ve interaktif öğeler aracılığıyla müşteri ilişkilerini kuvvetlendirir ve şirketin sektördeki lider konumunu destekler. Kurumsal internet sitesi, şirketin dijital pazarlama stratejisinin temel bir unsuru olup, rekabetçi bir iş dünyasında başarılı olmak için vazgeçilmez bir araçtır.',
    thumbnail: require('@images/internet-sitesi.png'),
    dimensions: {
      width: require('@images/internet-sitesi.png').default.width,
      height: require('@images/internet-sitesi.png').default.height,
    }
  },
  {
    id: 2,
    title: 'Mobil Uygulama',
    description: 'Mobil uygulamalar, günümüzde şirketlerin dijital varlıklarını genişletmek, müşteri etkileşimini artırmak ve kullanıcı deneyimini optimize etmek için kritik bir öneme sahiptir. Mobil uygulamalar, kullanıcıların her an, her yerden şirketle etkileşimde bulunmalarına olanak tanır, bu da müşteri sadakatini artırır. Şirketin ürün ve hizmetlerini hızlı ve kullanıcı dostu bir şekilde sunan mobil uygulamalar, müşterilere kişiselleştirilmiş bir deneyim sunarak marka sadakatini artırır. Ayrıca, güncel bildirimler ve özel teklifler aracılığıyla müşterilerle doğrudan iletişim kurma imkanı sağlar. Mobil uygulamalar, şirketin dijital stratejisini güçlendirir, rekabet avantajı sağlar ve iş süreçlerini daha verimli hale getirir. Sonuç olarak, mobil uygulamalar, şirketlerin dijital dönüşüm sürecinde önemli bir rol oynar ve müşterilerle daha derinlemesine bağlantı kurma fırsatı sunar.',
    thumbnail: require('@images/mobil-uygulama.png'),
    dimensions: {
      width: require('@images/mobil-uygulama.png').default.width,
      height: require('@images/mobil-uygulama.png').default.height,
    }
  }
]

export default function App() {
  return(
    <Layout>
      <Masthead/>
      <LogoCloud/>
      {ServiceList.map((service, key) => (
        <ServiceSection key={key}>
          <ServiceSection.Thumbnail alt={service.title} width={service.dimensions.width} height={service.dimensions.height}>
            {service.thumbnail}
          </ServiceSection.Thumbnail>
          <ServiceSection.Title>
            {service.title}
          </ServiceSection.Title>
          <ServiceSection.Description>
            {service.description}
          </ServiceSection.Description>
        </ServiceSection>
      ))}
    </Layout>
  )
}