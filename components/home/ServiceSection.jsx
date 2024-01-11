import { createElement } from "react";
import Image from 'next/image';
import Modal from "@components/shared/Modal";
import React from "react";
import ContactForm from "@components/forms/Contact";

function Thumbnail({width, height, alt, children}) {
    return(
        <React.Fragment>
            <Image
                className="bg-black/5 rounded-xl overflow-hidden"
                src={children}
                alt={alt}
                width={width}
                height={height}
            />
        </React.Fragment>
    )
}

function Title({children}) {
    return createElement('h2', {
        className: 'font-bold text-4xl'
    }, children);
}

function Description({children}) {
    return createElement('p', {
        className: 'text-md opacity-50'
    }, children);
}

export default function ServiceSection({children}) {
    const Childrens = {
        Title: children.filter(c => c.type === Title),
        Thumbnail: children.filter(c => c.type === Thumbnail),
        Description: children.filter(c => c.type === Description),
    }
    
    return(
        <section className="grid place-items-center w-full mx-auto">
            <div className="py-8 px-8 mx-auto max-w-screen-2xl lg:py-8 lg:px-4">
                <div className="grid grid-cols-1 place-content-center place-items-center lg:grid-cols-2 gap-4">
                    <picture>
                        {Childrens.Thumbnail}
                    </picture>

                    <div className="flex flex-col gap-4">
                        {Childrens.Title}
                        {Childrens.Description}

                        <Modal>
                            <Modal.Button className="w-fit p-4 min-w-[300px] bg-brand-primary text-white rounded-xl">Teklif Al</Modal.Button>
                            <Modal.Title>{Childrens.Title.map((title) => title.props.children)} İçin Teklif Alın</Modal.Title>
                            <Modal.Content>
                                <ContactForm />
                            </Modal.Content>
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    )
}

ServiceSection.Thumbnail = Thumbnail;
ServiceSection.Title = Title;
ServiceSection.Description = Description;