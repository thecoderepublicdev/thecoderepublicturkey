import { References } from "@data/index";
import Image from 'next/image';

export default function LogoCloud() {
    console.log(require('@references/colored/tool-expo.svg'))
    return(
        <div className="bg-black/5 py-6">
            <div className="container mx-auto max-w-screen-2xl flex gap-4 justify-between align-center items-center content-center">
                {References.map((reference, key) => reference.show && (
                    <div className="w-full max-h-[120px] rounded-xl grid place-content-center place-items-center">
                        <Image
                            key={key}
                            width={600}
                            height={150}
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