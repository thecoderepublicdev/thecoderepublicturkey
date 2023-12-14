import Logo from '@shared/Logo';
import HeaderData from '../../data/_Header';
import Link from 'next/link';
import classNames from 'classnames';

function Navigation() {
    return(
        <nav role='navigation' className='flex gap-4'>
            {HeaderData.navigation.map((item, key) => !item.disabled && (
                <Link key={key} href={item.path} className={classNames(
                    'p-4 rounded-xl text-black/50 hover:text-brand-primary hover:bg-brand-primary/10 transition-all ease-in-out'
                )}>
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}

export default function Header() {
    return(
        <header>
            <div className='xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-4 flex justify-between'>
                <Logo/>
                <Navigation/>
            </div>
        </header>
    )
}