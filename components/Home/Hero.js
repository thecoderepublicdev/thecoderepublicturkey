import Link from "next/link";
import Image from "next/image";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
    const Hero = {
        description: 'The Code Republic olarak dijital çözümler sunmanın yanı sıra kendi teknolojilerimizi geliştiriyor ve geleceği kodluyoruz.'
    };

    return(
        <section className="thecoderepublic-hero">
            <div className="max-w-7xl mx-auto pb-8 pt-8">
                <div className="grid grid-cols-1 flex-row sm:grid-cols-2 flex-row-reverse md:grid-cols-2 gap-3">
                    <div className="order-last sm:order-first md:order-first">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                                    <span className="font-body tracking-tighter	 block xl:inline text-white">Geleceği&nbsp;</span>
                                    <span className="font-body tracking-tighter	 block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-500 xl:inline">Kodluyoruz!</span>
                                </h1>
                                <p className="font-body mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    {Hero.description}
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a href="/hizmetlerimiz" className="font-heading tracking-tighter w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-black bg-white hover:bg-black hover:text-white hover:border-white md:py-4 md:text-lg md:px-10"> Hizmetlerimiz </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="/iletisim" className="font-heading tracking-tighter w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-white bg-transparent hover:bg-transparent hover:text-white hover:border-white md:py-4 md:text-lg md:px-10"> Fiyat Teklifi Al </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                    <div>
                        <aside className="mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-14">
                            <HeroAnimation/>
                            <div className="absolute inset-x-0 top-[-5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                                <svg className="relative w-full scale-150 top-[2rem] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                                    <defs>
                                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#9089FC"></stop>
                                            <stop offset="1" stopColor="#FF80B5"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}