import Layout from "@components/layout";
import Container from "@components/layout/Container";
import Title from "@components/layout/Title";

export default function CareerIndex() {
    return(
        <Layout>
            <Container>
                <Title level="h1">Kariyer @ The Code Republic</Title>
                <div className="grid place-content-center place-items-center w-full h-[500px] rounded-xl bg-black/5 mt-4">
                    <div className="grid gap-4">
                        <label className="font-bold text-4xl">Çok üzgünüz :(</label>
                        <p>Şu anda The Code Republic'te açık bir pozisyon ne yazık ki bulunmuyor. Seni aramızda görmeyi çok isteriz bu sebepten ötürü lütfen bizi takipte kal :)</p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}