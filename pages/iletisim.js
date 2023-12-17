import Layout from "@components/layout";
import Section from "@components/layout/Section";
import LocationBox from "@components/shared/LocationBox";

const Regions = [
    {
        country: 'Türkiye',
        phone: '+90 (552) 074 80 14',
        mail: 'turkey@thecoderepublic.dev',
        address: 'Mustafa Kemal Paşa Mahallesi Orhangazi Caddesi, Mektep Sokağı, 34312 Avcılar/İstanbul'
    },
    {
        country: 'Estonya',
        phone: '',
        mail: 'estonia@thecoderepublic.dev',
        address: 'Harju maakond, Tallinn, Kesklinna linnaosa, Tornimäe tn 7-26, 10145'
    },
    {
        country: 'Kosova',
        phone: '+383 45 358 285',
        mail: 'kosovo@thecoderepublic.dev',
        address: ''
    }
]

export default function ContactUs() {
    return(
        <Layout>
            <Section>
                <Section.Content>
                    <div className="h-[300px] grid content-center bg-white rounded-xl p-4 overflow-hidden">
                        <div className="my-4 px-4 lg:p-0 xl:p-0 2xl:p-0 grid gap-4">
                            <h1 className="text-7xl font-bold text-brand-primary">Size nasıl yardımcı olabiliriz?</h1>
                            <p className="text-gray-500 text-xl">The Code Republic üç ülkedeki merkezimizle dünyanın dört bir yanında yazılımsal hizmetler sunuyoruz. Peki sizlere nasıl yardımcı olabiliriz?</p>
                        </div>
                    </div>

                    <div className="my-4 px-4 lg:p-0 xl:p-0 2xl:p-0 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                        {Regions.map((r, k) => (
                            <LocationBox key={k}>
                                <LocationBox.Country>
                                    {r.country}
                                </LocationBox.Country>

                                <LocationBox.Address>
                                    {r.address}
                                </LocationBox.Address>

                                <LocationBox.Phone>
                                    {r.phone}
                                </LocationBox.Phone>

                                <LocationBox.Mail>
                                    {r.mail}
                                </LocationBox.Mail>
                            </LocationBox>
                        ))}
                    </div>
                </Section.Content>
            </Section>
        </Layout>
    )
}