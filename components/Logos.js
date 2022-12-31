import React from 'react';
import IntroFair from '../logos/white/intro.svg';
import DailyMeals from '../logos/white/daily-meals.svg';
import LiftExpo from '../logos/white/lift-expo.svg';
import TavsiyePsikolog from '../logos/white/tavsiye-psikolog.svg';
import TCRContainer from '../components/TCRContainer';

const References = () => {
    const Brands = [
        {
            url: 'https://www.tavsiyepsikolog.com.tr/?utm_source=thecoderepublic.dev',
            image: TavsiyePsikolog,
            title: "Tavsiye Psikolog",
            style: {width: '230px', height: 'auto'}
        },
        {
            url: 'https://www.liftexpo.kz/?utm_source=thecoderepublic.dev',
            image: LiftExpo,
            title: "Lift Expo Kazakhstan",
            style: {width: '210px', height: 'auto'}
        },
        {
            url: 'https://www.introfair.com?utm_source=thecoderepublic.dev',
            image: IntroFair,
            title: "Intro Fair Exihibition & Conference",
            style: {width: '130px', height: 'auto'}
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.thecoderepublic.dailymeals&utm_source=thecoderepublic.dev',
            image: DailyMeals,
            title: "DailyMeals: Daily Food & Drink Recipes",
            style: {width: '100px', height: 'auto'}
        },
    ];

    return(
        <TCRContainer>
            <tcr-references>
                {Brands.map((brand, key) => {return(
                    <tcr-logo key={key}>
                        <a href={brand.url} title={brand.title} target="_blank" rel="noreferrer">
                            <img 
                                src={brand.image}
                                alt={brand.title}
                                key={key}
                                style={brand.style}
                            />
                        </a>
                    </tcr-logo>
                )})}
            </tcr-references>
        </TCRContainer>
    )
}

export default References;