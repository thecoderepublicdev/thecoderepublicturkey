import Modal from "@components/shared/Modal"
import React from "react"
import Image from 'next/image'
import ContactForm from "@components/forms/Contact"
import { Disclosure } from '@headlessui/react'
import { isMobile } from "hooks/useDimensions";


const Name = ({children}) => {
    return <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{children}</h2>
}

const Features = ({children}) => {
    const features = children;
    const isCurrentViewMobile = isMobile()

    const Content = ({...props}) => {

        return(
            <React.Fragment>
                <Disclosure.Button open={props.open} className="py-2 visible 2xl:hidden xl:hidden lg:hidden ">Paket içeriği</Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                    <div className="my-4">
                        {features?.map((item, key) => (
                            <div key={key} className="flex align-center items-center py-4 border-b last:border-0 border-gray-200">
                                <label>{item.label}</label>
                            </div>
                        ))}
                    </div>
                </Disclosure.Panel>
            </React.Fragment>
        )
    }

    if(typeof children === 'array' && children.length) {
        return(
            <Disclosure>
                {({...props}) => <Content {...props}/>}
            </Disclosure>
        )
    }
}

const Description = ({children}) => {
    return <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{children}</p>
}

const Thumbnail = ({width, height, alt, children}) => {
    return(
        <Image
            className="bg-black/5 overflow-hidden"
            src={children}
            alt={alt}
            width={width}
            height={height}
        />
    )
}

export default function ServiceBox({url, children}) {
    const Childrens = {
        Name: children.filter(c => c.type === Name),
        Description: children.filter(c => c.type === Description),
        Thumbnail: children.filter(c => c.type === Thumbnail),
        Features: children.filter(c => c.type === Features),
    }

    const name = Childrens.Name.map((name) => name.props.children);

    return(
        <div className="bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
            <a href="#">
                {Childrens.Thumbnail}
            </a>
            <div className="p-5">
                {Childrens.Name}
                {Childrens.Description}
                {Childrens.Features}
                
                <Modal>
                    <Modal.Button className="cursor-pointer border flex justify-center content-center align-center items-center gap-2 hover:bg-gray-50 transition-all ease-in-out font-bold text-brand-primary p-4 rounded-xl w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                        <label>Teklif Alın</label>
                    </Modal.Button>

                    <Modal.Title>{name} İçin Teklif Alın</Modal.Title>

                    <Modal.Content>
                        <ContactForm formType="SERVICE_OFFER" isOfferForm={true} selectedServiceName={name}/>
                    </Modal.Content>
                </Modal>
                <a href={url} title={name} className="border mt-2 flex justify-center content-center align-center items-center gap-2 hover:bg-gray-50 transition-all ease-in-out font-bold text-brand-primary p-4 rounded-xl w-full">
                    Detaylı İnceleyin
                </a>
            </div>
        </div>

    )
}

ServiceBox.Name = Name;
ServiceBox.Description = Description;
ServiceBox.Thumbnail = Thumbnail;
ServiceBox.Features = Features;