import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head';
import { useRouter } from "next/router";
import MetaData from "@data/_MetaData";

export default function Layout({children}) {
    const router = useRouter();
    const currentPage = MetaData.filter(page => page.slug === router.asPath)[0];
    
    return(
        <React.Fragment>
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
                <meta name='robots' content='index,follow'/>

                <meta name='og:title' content={currentPage?.title}/>
                <meta name='og:description' content={currentPage?.description}/>
                <meta name='og:site_name' content="The Code Republic"/>
                <meta name='og:email' content='contact@thecoderepublic.dev'/>
                <meta name='og:phone_number' content='+90 (552) 074 80 14'/>
            </Head>
            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    )
}