import { References } from "@data/index";
import Image from 'next/image';

export default function LogoCloud() {
    console.log(require('@references/colored/tool-expo.svg'))
    return(
        <div className="py-24 sm:py-32">
            <div className="flex gap-4 justify-between align-center items-center content-center">
                {References.map((reference, key) => reference.show && (
                    <Image
                        key={key}
                        width={200}
                        className="grayscale p-6 rounded-xl grid place-content-center place-items-center"
                        height={80}
                        src={reference.logo}
                        alt={reference.brand}
                    />
                ))}
            </div>
        </div>
    )
}