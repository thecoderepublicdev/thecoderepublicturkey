import React from 'react';
import Logo from '../src/logos/tcr/TCR_Logo_3.svg';
import { Twitter, Instagram, LinkedIn } from './Icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const FooterBlocks = [
        {
            sectionTitle: "Hizmetlerimiz",
            sectionLinks: [
                {
                    href: "/web-sitesi-hizmeti",
                    title: "Web Sitesi Hizmeti"
                },
                {
                    href: "/e-ticaret-web-sitesi-hizmeti",
                    title: "E-Ticaret Web Sitesi Hizmeti"
                },
                {
                    href: "/mobil-uygulama-gelistirme-hizmeti",
                    title: "Mobil Uygulama Geliştirme Hizmeti"
                },
                {
                    href: "/grafik-tasarım-hizmeti",
                    title: "Grafik Tasarım Hizmeti"
                },
            ],
        },
        {
            sectionTitle: "Kurumsal",
            sectionLinks: [
                {
                    href: "/hakkimizda",
                    title: "Hakkımızda"
                },
                {
                    href: "/ekibimiz",
                    title: "Ekbimiz"
                },
                {
                    href: "/teknolojilerimiz",
                    title: "Kullandığımız Teknolojiler"
                },
            ],
        },
        {
            sectionTitle: "Yasal",
            sectionLinks: [
                {
                    href: "/yasal/gizlilik-politikasi",
                    title: "Gizlilik Politikası"
                },
                {
                    href: "/yasal/hizmet-kosullari",
                    title: "Hizmet Koşulları"
                },
                {
                    href: "/yasal/sartlar-ve-kosullar",
                    title: "Şartlar ve Koşullar"
                },
                {
                    href: "/yasal/cerezler",
                    title: "Çerezler"
                },
            ],
        },
        {
            sectionTitle: "Bizimle İletişime Geçin",
            sectionLinks: [
                {
                    href: "tel:+1 415 449 8770",
                    title: "Bizi Arayın"
                },
                {
                    href: "mailto:contact@thecoderepublic.dev",
                    title: "contact@thecoderepublic.dev"
                },
                {
                    href: "mailto:thecoderepublicofficial@gmail.com",
                    title: "thecoderepublicofficial@gmail.com"
                },
                {
                    href: "mailto:coderepublic@yandex.com",
                    title: "coderepublic@yandex.com"
                },
            ],
        },
    ];
    return(
        <footer className="bg-black text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">The Code Republic</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

                <div className="space-y-8 text-center">
                    <a href="/">
                        <picture>
                            <Image 
                                loading='lazy' 
                                className="w-24 h-24 mx-auto" 
                                src={Logo} 
                                alt="The Code Republic Resmi Logosu"
                            />
                        </picture>
                    </a>
                    <div className="flex justify-evenly md:justify-center md:space-x-6">
                        <Instagram
                            title="The Code Republic Resmi Instagram Hesabı"
                            link="https://www.instagram.com/thecoderepublic?utm_source=thecoderepublic.dev"
                        />
                        <Twitter
                            title="The Code Republic Resmi Twitter Hesabı"
                            link="https://www.twitter.com/tcrdotdev?utm_source=thecoderepublic.dev"
                        />
                        <LinkedIn
                            title="The Code Republic Resmi Twitter Hesabı"
                            link="https://www.linkedin.com/company/thecoderepublic/?utm_source=thecoderepublic.dev"
                        />
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-4 gap-8  xl:col-span-2 md:text-center">
                    {FooterBlocks.map((block, key) => {
                        return(
                            <div key={key} className="col-12 md:col-4">
                                <h4 className="collapsible text-sm font-semibold text-gray-400 tracking-wider uppercase">{block.sectionTitle}</h4>
                                <ul className="block content mt-4 space-y-4">
                                    {block.sectionLinks.map((link, key) => {
                                        return(
                                            <li key={key}>
                                                <a title={link.title} rel="noreferrer" href={link.href} className="text-base text-gray-500 hover:text-white">
                                                    {link.title}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>


                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; 2022 The Code Republic | All Rights Reserved | Tüm Hakları Saklıdır
                    </p>
                </div>
            </div>
        </footer>
    );
}