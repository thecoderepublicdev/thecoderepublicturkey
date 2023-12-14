import Layout from "@components/layout";
import Section from "@components/layout/Section";
import ServiceBox from "@components/services/ServiceBox";
import CallToAction from "@components/shared/CallToAction";
import SERVICES from "@data/_Services";

export default function ServicesPage() {
    return(
        <Layout>
            <Section>
                <Section.Content>
                    <CallToAction>
                        <CallToAction.Image>{require('@images/şirket-içi-özel-yazılım.png')}</CallToAction.Image>
                        <CallToAction.Title>Şirket içi Özel Yazılım ile Rakiplerinizin Önüne Geçin!</CallToAction.Title>
                        <CallToAction.Description>Ücretsiz toplantı talep edin; şirketinizin işleyişinizi en ince ayrıntısına kadar not alarak hangi alanlarda hangi dijital dönüşümleri yapabileceğimizi analiz ederek size sonuçları iletelim.</CallToAction.Description>
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
                </Section.Content>
            </Section>
        </Layout>
    )
}