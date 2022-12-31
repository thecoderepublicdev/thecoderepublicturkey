import Layout from '../components/layout';
import TCRContainer from '../components/TCRContainer';
import SectionHeader from '../components/SectionHeader';
import OurTeam from '../components/OurTeam';
import Thumbnail from '../src/thumbnails/the_code_republic_about_us_thumbnail.webp';


export default function About() {
    const AboutUsHeader = {
        subTitle: '2020\'den beri',
        title: 'Hakkımızda',
        description: "Bizimle tanışın",
    };

    return(
        <Layout title="Hakkımızda | The Code Republic" description="The Code Republic ve profesyonel ekibi ile tanışın!" tags="the code republic, the code republic kimdir, the code republic ekibi, the code republic sahibi, yazılım, tasarım, ui tasarımı, ui/ux tasarımı, e-ticaret sitesi, mobil uygulama" thumbnail={Thumbnail}>
            <TCRContainer>
                <SectionHeader
                    align="left"
                    subTitle={AboutUsHeader.subTitle}
                    title={AboutUsHeader.title}
                    description={AboutUsHeader.description}
                />
                <div>
                    <p className="text-lg text-white">
                        The Code Republic, 2020 yılında fikir olarak çizilip proje olarak beklemeye alınan, 2022 yılında Cenk Kahramaner önderliğinde kurulan çok uluslu bir yazılım şirketidir.
                        2020 yılında Cenk Kahramaner tarafından tasarlanan ve 2022 yılında Fatih Örmekıran'ın Kurucu Ortak olmasıyla faaliyetlerine başlayan The Code Republic, mobil uygulama hizmeti, kullanıcı arayüzü hizmeti, SEO hizmeti, web sitesi hizmeti, kurumsal web sitesi hizmeti, e-ticaret sitesi hizmeti veren ve aynı zamanda kendi yazılımlarını geliştiren Estonya merkezli bir şirkettir. 
                    </p>
                    <br/>
                    <p className="text-lg text-white">
                        Under the management of Gamze Bozkuş, Ecenur Şimşek, Cenk Kahramaner and Fatih Örmekıran, The Code Republic not only provides digital services but also develops its own software and technologies.
                        The Code Republic; As a company blended with years of experience of the professional people it hosts, it provides Brand Management services to prepare brands for the future, especially for the digital future.
                    </p>
                    <br/>
                    <p className="text-lg text-white">
                        Satışlarınızı arttırmak ve marka bilinirliği yaratmak istiyorsanız doğru yerdesiniz!
                    </p>
                    <p className="text-lg text-white">
                        Yeni bir iş mi kuruyorsunuz? The Code Republic olarak işletmenizin binlerce potansiyel müşteriye ulaşması için tüm hizmetlerimizi size sunabiliriz.
                    </p>
                </div>
                
                <OurTeam/>
            </TCRContainer>
        </Layout>
    )
}