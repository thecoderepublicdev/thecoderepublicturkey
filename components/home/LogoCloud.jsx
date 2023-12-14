import { References } from "@data/index";
import Image from 'next/image';

export default function LogoCloud() {
    return(
        <div className="bg-black/5 py-6">
            <div className="px-10 flex gap-4 justify-between align-center items-center content-center">
                {References.map((reference, key) => reference.show && (
                    <div key={key} className="w-full max-h-[120px] rounded-xl grid place-content-center place-items-center">
                        <Image
                            key={key}
                            width={600}
                            height={150}
                            loading="lazy"
                            blurDataURL={reference.logo.blurDataURL}
                            className="grayscale scale-120"
                            src={reference.logo}
                            alt={reference.brand}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}