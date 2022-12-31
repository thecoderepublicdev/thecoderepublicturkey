import React from 'react';
import Head from 'next/head';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import TCR_HOME_THUMBNAIL from '../src/thumbnails/the_code_republic_home_thumbnail.webp';


export default function Layout({...props}) {

    return(
        <Section title={props.title} tags={props.tags}>
            <Head>
                <title>{props.title}</title>
                <meta name="robots" content="all"/>
                <meta name="googlebot" content="all"/>
                <meta name="x-robots-tag" content="all"/>
                <meta rel="canonical" content={props.canonical}/>
                <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.thecoderepublic.com.tr/sitemap.xml"/>
                <meta name="description" content={props.description}/>
                <meta name="tags" content={props.tags}/>
                <meta name="author" content="The Code Republic"/>
                <meta property="og:title" content={props.title}/>
                <meta property="og:description" content={props.description}/>
                <meta property="twitter:title" content={props.title}/>
                <meta property="twitter:description" content={props.description}/>
                <meta property="twitter:site" content="The Code Republic"/>
                <meta property="twitter:creator" content="The Code Republic"/>
                <meta property="og:site_name" content="The Code Republic"/>
                <meta property="og:locale" content="tr-TR"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={(props.thumbnail) ? "https://www.thecoderepublic.com.tr" + props.thumbnail.src : "https://www.thecoderepublic.com.tr" + TCR_HOME_THUMBNAIL.src}/>
            </Head>
            <Header/>
            {props.children}
            <Footer/>
        </Section>
    );
}