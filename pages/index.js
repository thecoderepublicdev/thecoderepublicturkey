import Masthead from "@components/home/Masthead";
import Layout from "../components/layout";
import LogoCloud from "@components/home/LogoCloud";
import ServiceSection from "@components/home/ServiceSection";
import SERVICES from "@data/_Services";

export default function App() {
  return(
    <Layout>
      <Masthead/>
      <LogoCloud/>
      {SERVICES.map((service, key) => service.thumbnail && (
        <ServiceSection key={key}>
          <ServiceSection.Thumbnail alt={service.title} width={service?.dimensions?.width} height={service?.dimensions?.height}>
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