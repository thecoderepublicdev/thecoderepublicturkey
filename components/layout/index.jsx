import dynamic from 'next/dynamic';
import {Fragment} from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import MetaData from "@data/_MetaData";
import { GoogleTagManager } from '@next/third-parties/google'


const Footer = dynamic(() => import('./Footer'), {
    loading: () => (<p>Header</p>)
})
const Header = dynamic(() => import('./Header'), {
    loading: () => (<p>Header</p>)
})

export default function Layout({children}) {
    const router = useRouter();
    const currentPage = MetaData.filter(page => page.slug === router.asPath)[0];
    
    return(
        <Fragment>
            <Head>
                <title>{currentPage?.title}</title>
                <meta name="description" content={currentPage?.description}/>
                <meta name="keywords" content={currentPage?.tags}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="The Code Republic, contact@thecoderepublic.dev"/>
                <meta name="reply-to" content="contact@thecoderepublic.dev"/>
                <meta name="copyright" content="The Code Republic"/>
                <meta name="owner" content="The Code Republic"/>
                <meta name="language" content="TR"/>
                <meta name='robots' content='index'/>
                <meta name='robots' content='follow'/>
                <meta name='robots' content='archive'/>
                <meta name='yandex' content='index'/>
                <meta name='yandex' content='follow'/>
                <meta name='yandex' content='archive'/>
                <meta name='revisit-after' content='7 days'/>
                <meta name="googlebot" content="all"/>
                <meta name='og:region' content='TR'/>
                <meta name='og:title' content={currentPage?.title}/>
                <meta name='og:description' content={currentPage?.description}/>
                <meta name='og:site_name' content="The Code Republic"/>
                <meta name='og:email' content='contact@thecoderepublic.dev'/>
                <meta name='og:phone_number' content='+90 (552) 074 80 14'/>
                <meta name="apple-mobile-web-app-title" content="The Code Republic Türkiye"/>
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='white'/>
                <meta name="google-site-verification" content="dnhCh-P5qIuh0fUMqZZ1nrzu7oX1-0Tm-CQJHAk4JdU"/>
                <GoogleTagManager gtmId="GTM-NMMXD3FX"/>
            </Head>
            <Header/>
                <GoogleTagManager gtmId="GTM-NMMXD3FX"/>
                {children}
            <Footer/>
        </Fragment>
    )
}