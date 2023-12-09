import IconButton from '@components/shared/buttons/Icon';
import Head from 'next/head';

export default function NotFound() {
    const RelatedLinks = [
        {
            icon: "home",
            title: "Ana Sayfa",
            description: "The Code Republic'e geri dön",
            link: "/",
        },
        {
            icon: "forum",
            title: "Sıkça Sorulan Sorular (S.S.S.)",
            description: "The Code Republic'e sıkça sorulan sorulara ve bu sorulara verilen cevaplara bakın. 🥰",
            link: "/sss",
        },
        {
            icon: "stream",
            title: "Canlı Destek",
            description: "The Code Republic'e dair sorularınız varsa Canlı Destek ekibimizle iletişime geçebilirsiniz.",
            link: "/canli-destek",
        },
    ];

    return(        
        <div className="flex items-center justify-center min-h-screen">
            <Head>
                <title>Kaybolmuşsun Gibisin 🥺</title>
            </Head>

            <div className="flex flex-col">
                <div className="flex flex-col items-center mb-0">
                    <div className="text-indigo-500 font-bold text-7xl">
                        🥺
                    </div>
        
                    <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl">
                        Sanırsam Kayboldun
                    </div>
        
                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-10">
                        Aramaya çalıştığın sayfa yok gibi görünüyor, yardım ister misin?
                    </div>
                </div>
        
                <div className="flex flex-col mt-20">
                    <div className="text-gray-400 font-bold uppercase">
                        Şunlarla devam edin
                    </div>
        
                    <div className="flex flex-col items-stretch">
                        {RelatedLinks.map((item, key) => (
                            <IconButton key={key} showArrow={true} url={item.link}>
                                <IconButton.Icon>
                                    {item.icon}
                                </IconButton.Icon>
                                <IconButton.Title>
                                    {item.title}
                                </IconButton.Title>
                                <IconButton.Description>
                                    {item.description}
                                </IconButton.Description>
                            </IconButton>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}