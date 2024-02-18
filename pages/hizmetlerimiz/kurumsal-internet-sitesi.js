import Layout from "@components/layout";
import Container from "@components/layout/Container";
import Title from "@components/layout/Title";

export default function() {
    return(
        <Layout>
            <Container centered={true} height={600} flex={{
                column: true,
                gap: 8
            }}>
                <label className="text-center text-xl font-bold text-black/50">İşletmenizin Dijital Yolculuğuna Adım Atın</label>
                <Title centered={true} level="h1">Kurumsal İnternet Sitesi</Title>
            </Container>
        </Layout>
    )
}