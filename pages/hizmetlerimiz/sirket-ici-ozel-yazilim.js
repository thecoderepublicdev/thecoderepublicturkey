import Layout from "@components/layout";
import MastheadSection from "@components/layout/Masthead";
import Section from "@components/layout/Section";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Image from 'next/image';

const OurCustomers = {
    Tabs: [
        require('@references/tavsiye-psikolog.png'),
        require('@references/blackbear.png'),
        require('@references/biseo.png'),
    ],
    Panels: [
        "Girişimimizin tüm yazılımsal süreçlerini ve yönetim panelini The Code Republic'e yaptırmayı karar kıldık ve karşılığında beklentimizin üzerinde bir dakiklik, profesyonel çalışma elde ettik.",
        "Sektörümüzde en iyisi olma yolunda The Code Republic'e danıştık ve kendilerinin hızlı dönüşü, müthiş problem çözme yeteneği ve hızlı çalışma tarzı ile harika bir ekip içi yazılımına kavuştuk. Artık ekip içerisinde kargaşa oluşmuyor ve her şeyimizi tek bir uygulama üzerinden gerçekleştirebiliyoruz.",
        "Müşterilerimize daha iyi ve hızlı bir hizmet sağlayabilmek için ihtiyaç duyduğumuz bir yazılımı beklemek yerine The Code Republic'e danıştık ve ne mi oldu? Mevcut müşterilerimizin memnuniyetini arttırmanın yanı sıra yeni müşterilere ulaşmamız için gereken zamanı elde ettik."
    ]
}

export default function handle() {
    const MastheadPhoto = require('@images/şirket-içi-özel-yazılım.png');
    return(
        <Layout>
            <Section>
                <Section.Content>
                    <MastheadSection>
                        <MastheadSection.Left>
                            <div className="grid gap-4 p-4 xl:p-0 lg:p-0 2xl:p-0">
                                <div className="flex align-center items-center gap-2 rounded-full p-2 border-2 border-brand-primary w-fit text-brand-primary">
                                    <div className="rounded-full p-2 bg-brand-primary text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 004.875-4.875V12m6.375 5.25a4.875 4.875 0 01-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 013.182 3.182zM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 113.182-3.182z" />
                                        </svg>
                                    </div>

                                    <label>3 Aylık <strong>TCR Care+</strong> hediye</label>
                                </div>

                                <h1 className="text-6xl font-bold tracking-tight text-brand-primary">Şirket içi Özel Yazılım</h1>
                                <p className="text-black/50 text-lg">Sektörünüzü ve şirketinizin iş akışını analiz ederek geliştireceğimiz özel yazılımınız ile şirketinizdeki iş yükünü hafifletin, rakiplerinizin önüne geçin ve cironuzu arttırın. Büyümeyi hedefleyen şirketlerin bir numaralı tercihi ile tanışın.</p>
                            </div>
                        </MastheadSection.Left>
                        <MastheadSection.Right>
                            <Image
                                loading="lazy"
                                blurDataURL={MastheadPhoto.blurDataURL}
                                className="p-6 pb-0 overflow-hidden object-cover object-top max-h-[500px] bg-brand-primary/5 rounded-xl"
                                src={MastheadPhoto}
                                width={MastheadPhoto.default.width}
                                heigth={MastheadPhoto.default.heigth}
                                alt="Şirket içi Özel Yazılım | The Code Republic | Yazılım Şirketi"
                            />
                        </MastheadSection.Right>
                    </MastheadSection>
                </Section.Content>
            </Section>

            <Section>
                <Section.Content>
                    <div className="p-10 rounded-xl bg-white grid xl:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
                        <div className="grid gap-4 items-start content-start align-top">
                            <h2 className="text-4xl font-bold">İşini, The Code Republic ile <br/> Büyüten Şirketler</h2>
                            <p className="text-black/50 text-2xl">Bize değil, onların yaşadığı deneyimlere kulak verin.</p>
                        </div>

                        <div>
                            <Tab.Group>
                                <Tab.List className="flex justify-between items-center content-center">
                                    {OurCustomers.Tabs.map((logo, key) => (
                                        <Tab className="outline-none" key={key}>
                                            {({selected}) => (
                                                <Image
                                                    className={classNames(
                                                        'rounded-xl p-6 max-h-[100px] transition ease-in-out object-cover grid place-content-center place-items-center', {
                                                            'bg-brand-primary/5': selected
                                                        }
                                                    )}
                                                    src={logo}
                                                />
                                            )}
                                        </Tab>
                                    ))}
                                </Tab.List>

                                <Tab.Panels>
                                    {OurCustomers.Panels.map((comment, key) => (
                                        <Tab.Panel key={key}>
                                            <blockquote className="text-xl italic font-semibold text-gray-900 mt-6">
                                                <svg className="w-8 h-8 text-brand-primary mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                                                </svg>
                                                <p>{comment}</p>
                                            </blockquote>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </Section.Content>
            </Section>
        </Layout>
    )
}