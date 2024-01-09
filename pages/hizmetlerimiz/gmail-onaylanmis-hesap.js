import Layout from "@components/layout";
import Grid from "@components/layout/Grid";
import MastheadSection from "@components/layout/Masthead";
import Section from "@components/layout/Section";
import FeatureBox from "@components/shared/FeatureBox";

const Features = [
    {
        image: "/images/gmail-mavi-tik/gmail-mavi-tik-entegrasyonu-spam.png",
        title: 'Spam kutusuna düşmekten kurtulun',
        description: 'Doğrulanmış mail adresleri spam kutusuna hiçbir zaman düşmüyorlar'
    },
    {
        image: "/images/gmail-mavi-tik/gmail-mavi-tik-entegrasyonu-mavi-tik.png",
        title: 'Mavi Tik işareti ile güven sağlayın',
        description: 'Gönderdiğiniz mailler kullanıcılar tarafından görüntülenirken şirket adınızın yanında mavi bir tik görünür.'
    },
    {
        image: "/images/gmail-mavi-tik/gmail-mavi-tik-entegrasyonu-mavi-tik-önizleme.png",
        title: 'Logonuz & Markanız Sertifika Altında Korunur',
        description: 'Gönderdiğiniz mailler kullanıcılar tarafından görüntülenirken şirket adınızın yanında mavi bir tik görünür.'
    },
]

export default function handle() {
    return(
        <Layout>
            <Section>
                <Section.Content>
                    <MastheadSection>
                        <MastheadSection.Left>
                            <div className="grid gap-4 p-4 xl:p-0 lg:p-0 2xl:p-0">
                                <div className="flex align-center items-center gap-2 rounded-full p-2 border-2 border-brand-primary w-fit text-brand-primary">
                                    <div className="rounded-full w-10 h-10 p-2 bg-brand-primary text-white">
                                        <span className="material-symbols-outlined">attach_money</span>
                                    </div>

                                    <label>
                                        <strong>$2,000/yıllık</strong>
                                    </label>
                                </div>

                                <h1 className="text-6xl font-bold tracking-tight text-brand-primary">Gmail Onaylanmış Hesap</h1>
                                <p className="text-black/50 text-lg">
                                    "Markanız, siz orada olmadığınızda insanların sizin hakkınızda söyledikleridir."

                                    Bu nedenle markanızın dijital kanallarını dolandırıcılığa karşı korumak çok önemlidir. Müşterilerinizle güven oluşturmak birinci görevdir.

                                    Google Doğrulanmış Marka Sertifikanızı hemen alın ve markanızın değerini korurken prestijini katlayın.
                                </p>
                            </div>
                        </MastheadSection.Left>
                        <MastheadSection.Right>
                            <img
                                loading="lazy"
                                className="pb-0 overflow-hidden object-cover object-top max-h-[500px] bg-brand-primary/5 rounded-xl"
                                src="/images/google-bimi-masthead.png"
                                alt="Şirket içi Özel Yazılım | The Code Republic | Yazılım Şirketi"
                            />
                        </MastheadSection.Right>
                    </MastheadSection>
                </Section.Content>
            </Section>

            <Section>
                <Section.Content>
                    <Grid cols={3} gap={4}>
                        {Features.map((feature, key) => (
                            <FeatureBox key={key}>
                                <FeatureBox.Thumbnail alt={feature.title}>{feature.image}</FeatureBox.Thumbnail>
                                <FeatureBox.Title>{feature.title}</FeatureBox.Title>
                                <FeatureBox.Description>{feature.description}</FeatureBox.Description>
                            </FeatureBox> 
                        ))}
                    </Grid>
                </Section.Content>
            </Section>
        </Layout>
    )
}