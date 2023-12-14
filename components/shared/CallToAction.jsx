import Image from 'next/image';
import Modal from './Modal';
import CompanyContactForm from '@components/forms/Company';

const Thumbnail = ({children}) => {
    return(
        <div className="relative mt-16 h-80 lg:mt-8">
            <Image
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={children}
                alt=""
                width={1824}
                height={1080}
            />
        </div>
    )
}

const Title = ({children}) => {
    return(
        <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
            {children}
        </h2>
    )
}

const Description = ({children}) => {
    return(
        <p className="mt-6 text-lg leading-8 text-black">
            {children}
        </p>
    )
}

export default function CallToAction({children}) {
    const Childrens = {
        Thumbnail: children.filter(c => c.type === Thumbnail),
        Title: children.filter(c => c.type === Title),
        Description: children.filter(c => c.type === Description),
    }

    return (
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#164DD6" />
                    <stop offset={1} stopColor="#164DD6" />
                </radialGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                {Childrens.Title}
                {Childrens.Description}

                <div className="mt-10 flex items-center justify-center gap-x-4 lg:justify-start">
                    <Modal>
                        <Modal.Button className="rounded-full bg-brand-primary text-md font-semibold text-white px-6 py-4 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Ücretsiz Toplantı Talep Et
                        </Modal.Button>
                        <Modal.Content>
                            <CompanyContactForm/>
                        </Modal.Content>
                    </Modal>
                    <a href="/hizmetlerimiz/sirket-ici-ozel-yazilim" className="text-sm px-6 py-4 hover:bg-brand-primary/25 rounded-full font-semibold leading-6 flex align-center items-center content-center text-brand-primary">
                        <label>
                            Detaylı Bilgi Al
                        </label>
                        <span className='material-symbols-outlined'>chevron_right</span>
                    </a>
                </div>
            </div>
            {Childrens.Thumbnail}
        </div>
    )
}


CallToAction.Image = Thumbnail;
CallToAction.Title = Title;
CallToAction.Description = Description;