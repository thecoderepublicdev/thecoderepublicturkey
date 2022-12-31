import Layout from '../components/layout';
import IconBox from '../components/IconBox';
import ContactFormBox from '../components/contact/ContactFormBox';
import Thumbnail from '../src/thumbnails/the_code_republic_contact_thumbnail.webp';

export default function Contact() {
    const PageMeta = {
        title: 'İletişim | The Code Republic',
        description: 'Marka Yönetimi, Mobil Uygulama Geliştirme, E-Ticaret Sitesi, Kurumsal Web Sitesi, Fuar Web Sitesi, Grafik Tasarım Hizmeti, Sosyal Medya Tasarımları ve daha fazlası The Code Republic\'te!',
        tags: "marka yönetimi, mobil uygulama geliştirme, e-ticaret sitesi, pazarlama, e-ticaret sitesi oluştur, sosyal medya tasarımları, grafik tasarım, fuar sitesi, fuar sitesi yap, kurumsal web sitesi satın al, kurumsal web sitesi oluştur"
    };
    
    const Contacts = [
        {
            icon: 'phone',
            title: 'Bizi Arayın (Türkiye)',
            description: '+90 (552) 074 80 14',
            href: 'tel:+905520748014',
        },
        {
            icon: 'phone',
            title: 'Bizi Arayın (Uluslararası)',
            description: '+1 415 449 8770',
            href: 'tel:+1 415 449 8770',
        },
        {
            icon: 'mail',
            title: 'Kurumsal İşbirlikleri İçin',
            description: 'contact@thecoderepublic.dev',
            href: 'mailto:contact@thecoderepublic.dev',
        },
        {
            icon: 'mail',
            title: 'Diğer Tüm Konular İçin',
            description: 'thecoderepublicofficial@gmail.com',
            href: 'mailto:thecoderepublicofficial@gmail.com',
        },
        {
            icon: 'mail',
            title: 'Diğer Tüm Konular İçin',
            description: 'coderepublic@yandex.com',
            href: 'mailto:coderepublic@yandex.com',
        },
        {
            icon: 'link',
            title: 'Instagram',
            description: '@thecoderepublic',
            href: 'https://instagram.com/thecoderepublic/',
            target: '_blank',
        },
        {
            icon: 'link',
            title: 'Twitter',
            description: '@tcrdotdev',
            href: 'https://twitter.com/tcrdotdev',
            target: '_blank',
        },
    ];

    return(
        <Layout title={PageMeta.title} description={PageMeta.description} tags={PageMeta.tags} thumbnail={Thumbnail}>
            <div className="min-h-[100vh]">
                <div className="max-w-screen-xl mx-auto py-2 px-5">
                    <div className='grid gap-4 my-10'>
                        <h1 className="font-bold text-3xl">Bizimle iletişime geçin</h1>    
                        <p>The Code Republic olarak çalıştığımız ve çalışacağımız insanları çok önemsiyoruz ve bu yüzden bizimle her konuda iletişime geçmenizi istiyoruz. Hizmetlerimiz hakkında fiyat teklifi almak, bizimle işbirlikleri kurmak ya da aklınızdaki soru işaretlerine yanıt bulmak için bizimle iletişime geçin.</p>  
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 flex-row-reverse md:grid-cols-2 gap-3">
                        <div className="col-6">
                            {Contacts.map((contact, key) => {return(
                                <IconBox
                                    key={key}
                                    icon={contact.icon}
                                    title={contact.title}
                                    description={contact.description}
                                    href={contact.href}
                                    target={contact.target}

                                />
                            )})}
                        </div>

                        <div className="col-6">
                            <ContactFormBox/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}