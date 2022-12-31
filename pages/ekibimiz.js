import Layout from '../components/layout';
import OurTeam from '../components/OurTeam';
import TCRTCRContainer from '../components/TCRContainer';
import Thumbnail from '../src/thumbnails/the_code_republic_about_us_thumbnail.webp';

export default function Ekibimiz() {
    const Meta = {
        title: "Ekibimiz | The Code Republic | Geleceği Kodluyoruz",
        description: "Web sitesi hizmeti, grafik tasarım hizmeti, mobil uygulama hizmeti ve diğer birçok hizmeti veren The Code Republic'in profesyonel elleri ile tanışmaya hazır mısınız?",
        tags: "the code republic, web tasarım hizmeti, web sitesi hizmeti, grafik tasarım hizmeti, cenk kahramaner, ecenur şimşek, gamze bozkuş, fatih örmekıran"
    };

    return(
        <Layout title={Meta.title} description={Meta.description} tags={Meta.tags} thumbnail={Thumbnail}>
            <TCRTCRContainer>
            <OurTeam/>
            </TCRTCRContainer>
        </Layout>
    )
}