import Section from "@components/layout/Section";
import ServiceBox from "@components/services/ServiceBox";
import CallToAction from "@components/shared/CallToAction";
import SERVICES from "@data/_Services";
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/layout/index'), {
    loading: () => <p className="w-full h-full text-center">Lütfen bekleyin</p>
});
export default function ServicesPage() {

    return(
        <Layout>
            <Section>
                <Section.Content>
                    <div className="p-6 grid gap-4">
                        <h1 className="font-bold text-4xl">Sunduğumuz Hizmetler</h1>
                        <p itemprop="description" className="text-black/50">The Code Republic olarak firmalara/markalara ve bireysellere; <strong>Kurumsal İnternet sitesi</strong>, <strong>E-Ticaret Sitesi</strong> ve <strong>Mobil Uygulama Geliştirme</strong> başta olmak üzere Grafik Tasarım, Logo Tasarımı, <strong>UI & UX Tasarım</strong> alanlarında da hizmetler sunmaktayız.</p>
                    </div>
                    <CallToAction>
                        <CallToAction.Image>{require('@images/şirket-içi-özel-yazılım.png')}</CallToAction.Image>
                        <CallToAction.Title>Şirket içi Özel Yazılım ile Rakiplerinizin Önüne Geçin!</CallToAction.Title>
                        <CallToAction.Description>Ücretsiz toplantı talep edin; şirketinizin işleyişinizi en ince ayrıntısına kadar not alarak hangi alanlarda hangi dijital dönüşümleri yapabileceğimizi analiz ederek size sonuçları iletelim.</CallToAction.Description>
                        <CallToAction.Link href="/hizmetlerimiz/sirket-ici-ozel-yazilim">Detaylı Bilgi Al</CallToAction.Link>
                    </CallToAction>

                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 gap-4 my-10">
                        {SERVICES?.map((service, key) => service.thumbnail && (
                            <ServiceBox key={key} url={service.path}>
                                <ServiceBox.Thumbnail alt={service.title} width={service.dimensions.width} height={service.dimensions.height}>
                                    {service.thumbnail}
                                </ServiceBox.Thumbnail>
                                <ServiceBox.Name>{service.title}</ServiceBox.Name>
                                <ServiceBox.Features>{service?.features}</ServiceBox.Features>
                                <ServiceBox.Description>{service.description}</ServiceBox.Description>
                            </ServiceBox>
                        ))}
                    </div>
                    <CallToAction>
                        <CallToAction.Image>{require('@publicimages/google-bimi-masthead.png')}</CallToAction.Image>
                        <CallToAction.Title>Gmail Onaylanmış Hesap</CallToAction.Title>
                        <CallToAction.Description>"Markanız, siz orada olmadığınızda insanların sizin hakkınızda söyledikleridir." Bu nedenle markanızın dijital kanallarını dolandırıcılığa karşı korumak çok önemlidir. Müşterilerinizle güven oluşturmak birinci görevdir. Google Doğrulanmış Marka Sertifikanızı hemen alın ve markanızın değerini korurken prestijini katlayın.</CallToAction.Description>
                        <CallToAction.Link href="/hizmetlerimiz/gmail-onaylanmis-hesap">Detaylı Bilgi Al</CallToAction.Link>
                    </CallToAction>
                </Section.Content>
            </Section>
        </Layout>
    )
}