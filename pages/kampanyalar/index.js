import Layout from "@components/layout";
import Container from "@components/layout/Container";
import Description from "@components/layout/Description";
import Grid from "@components/layout/Grid";
import Title from "@components/layout/Title";

export default function CampaignHome() {
    return(
        <Layout>
            <Container>
                <Grid cols={1} gap={4}>
                    <Title level="h1">Kampanyalar</Title>
                    <Description>
                        The Code Republic olarak dönemsel olarak başlattığımız tüm kampanyalara buradan ulaşabilirsiniz.
                    </Description>
                </Grid>
            </Container>
        </Layout>
    )
}