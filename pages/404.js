import Head from 'next/head';

export default function NotFound() {
    const RelatedLinks = [
        {
            icon: "home",
            title: "Back to Home",
            description: "Return to Home",
            link: "/",
        },
        {
            icon: "forum",
            title: "Frequently Asked Questions (FAQ)",
            description: "We have answered frequently asked questions about our services and our company in advance 🥰",
            link: "/faq",
        },
        {
            icon: "stream",
            title: "Start a Live Support",
            description: "If you wish, you can find what you are looking for more easily by contacting our Live Support team.",
            link: "/live-support",
        },
    ];

    return(        
        <div className="flex items-center justify-center min-h-screen">
            <Head>
                <title>You're in now blackhole 😱</title>
            </Head>

            <div className="flex flex-col">
                <div className="flex flex-col items-center mb-0">
                    <div className="text-indigo-500 font-bold text-7xl">
                        404
                    </div>
        
                    <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl">
                        This page does not exist
                    </div>
        
                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-10">
                        The page you are looking for could not be found.
                    </div>
                </div>
        
                <div className="flex flex-col mt-20">
                    <div className="text-gray-400 font-bold uppercase">
                        Continue With
                    </div>
        
                    <div className="flex flex-col items-stretch">
                        {RelatedLinks.map((item, key) => {return(
                            <a key={key} href={item.link} className="no-underline">
                                <div className="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100">
                                    <div className="rounded-xl bg-indigo-500 px-3 py-2 w-16 h-16 grid items-center content-center md:py-4">
                                        <span className="material-symbols-outlined mx-auto">{item.icon}</span>
                                    </div>
                
                                    <div className="grow flex flex-col pl-5 pt-2">
                                        <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                            {item.title}
                                        </div>
                
                                        <div className="font-semibold text-sm md:text-md lg:text-lg text-gray-400 group-hover:text-gray-500 transition-all duration-200 delay-100">
                                            {item.description}
                                        </div>
                                    </div>
                

                                    <span className="material-symbols-outlined">keyboard_arrow_right</span>
                                </div>
                            </a>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}