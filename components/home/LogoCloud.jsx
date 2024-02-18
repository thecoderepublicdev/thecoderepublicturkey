import Title from "@components/layout/Title";
import { References } from "@data/index";
import Image from 'next/image';

export default function LogoCloud() {
    return(
        <div className="xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-xl mx-auto overflow-hidden">
            <div className="grid grid-cols-5 gap-4 justify-between align-center items-center content-center">
                {References.map((reference, key) => reference.show && (
                    <div key={key} className="w-30 p-4 bg-black/5 rounded-xl grid place-content-center place-items-center">
                        <Image
                            key={key}
                            width={600}
                            height={150}
                            loading="lazy"
                            blurDataURL={reference.logo.blurDataURL}
                            src={reference.logo}
                            alt={reference.brand}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}