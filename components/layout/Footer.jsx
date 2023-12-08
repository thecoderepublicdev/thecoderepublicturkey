import SocialMedia from '@shared/SocialMedia';
import Logo from '@shared/Logo';
import { Blocks } from '@data/_Footer';
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/solid'


export default function Footer() {
    return(
        <footer className='static bottom-0 w-full z-[-1] backdrop-blur-sm text-black mt-4'>
            <div className='mx-auto max-w-screen-xl pb-6'>
                <div className="mx-auto max-w-screen-xl flex justify-between items-center align-center content-center mb-6 pb-6 border-b dark:border-[white]/25 light:border-[black]/25 sm:px-4">
                    <div>
                        <Logo/>
                    </div>
                    <div className="">
                        <SocialMedia/>
                    </div>
                </div>

                <div className='grid gap-8 lg:grid-cols-4 sm:grid-cols-1'>
                    {Blocks.map(block => (
                        <div key={block.title} className='px-4'>
                            <label className='block font-bold text-lg text-black mb-4'>{block.title}</label>
                            <ul className='grid gap-2'>
                                {block.links.map(link => (
                                    <li key={link.display_text} className="text-black flex justify-between hover:text-brand-primary cursor-pointer group py-2 opacity-50 hover:opacity-100 transition-all transition:ease-in-out">
                                        <Link href={link.url}>
                                            {link.display_text}
                                        </Link>
                                        <ArrowUpIcon className='opacity-0 group-hover:opacity-100 w-4 h-4'/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}