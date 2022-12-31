import Logo from '../src/logos/tcr/TCR_Logo_3.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    const NavigationBar = [
        {
            href: '/hakkimizda',
            title: 'Hakkımızda',
        },
        {
            href: '/hizmetlerimiz',
            title: 'Hizmetlerimiz',
        },
        {
            href: '/iletisim',
            title: 'İletişim',
        },
    ];

    return(
        <header>
            <div className="max-w-7xl mx-auto py-2 px-5 text-white flex justify-between">
                <a href="https://www.thecoderepublic.com.tr" title="The Code Republic Türkiye | Geleceği Kodluyoruz">
                    <picture>
                        <Image
                            src={Logo}
                            className="w-24 h-24"
                            alt="The Code Republic Official Logo"
                        />
                    </picture>
                </a>
                <nav className="flex items:center">
                    <ul className="flex items-center gap-1">
                        {NavigationBar.map((item, key) => {return(
                            <li key={key} >
                                <a title={item.title} className="transition font-body border border-transparent rounded-full hover:border-white hover:text-black hover:bg-white hidden md:block px-8 py-4" href={item.href}>
                                    {item.title}
                                </a>
                            </li>
                        )})}
                    </ul>
                </nav>
            </div>
        </header>
    );
}