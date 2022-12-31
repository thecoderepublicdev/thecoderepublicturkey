import Image from 'next/image';
import Link from 'next/link';
import IntroFair from '../src/logos/references/white/intro.svg';
import DailyMeals from '../src/logos/references/white/daily-meals.svg';
import LiftExpo from '../src/logos/references/white/lift-expo.svg';
import TavsiyePsikolog from '../src/logos/references/white/tavsiye-psikolog.svg';
import TCRContainer from './TCRContainer';

export default function References() {
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
            <div className="flex justify-between content-center items-center p-2">
                {Brands.map((brand, key) => {return(
                    <div className="opacity-50 hover:opacity-100" key={key}>
                        <Link href={brand.url} title={brand.title} target="_blank" rel="noreferrer">
                            <Image 
                                src={brand.image}
                                alt={brand.title}
                                key={key}
                                style={brand.style}
                            />
                        </Link>
                    </div>
                )})}
            </div>
        </TCRContainer>
    )
}