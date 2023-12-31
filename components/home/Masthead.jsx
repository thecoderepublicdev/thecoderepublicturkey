import Modal from "@components/shared/Modal";
import Link from "next/link";
import Image from 'next/image';
import MastheadSection from "@components/layout/Masthead";
import ContactForm from "@components/forms/Contact";

export default function Masthead() {
    return(
        <MastheadSection>
            <MastheadSection.Left>
                <div className="p-4 grid gap-4">
                    <h1 className="font-bold text-7xl text-brand-primary">İşletmenizin Geleceğini Kodluyoruz!</h1>
                    <p className="text-gray-500 text-lg">
                        <a title="The Code Republic Estonya Resmi Instagram Hesabı" href="https://www.instagram.com/thecoderepublicestonia">🇪🇪 Estonya</a>, <a title="The Code Republic Kosova Resmi Instagram Hesabı" href="https://www.instagram.com/thecoderepublic.kosovo">🇽🇰 Kosova</a> ve <a title="The Code Republic Türkiye Resmi Instagram Hesabı" href="https://www.instagram.com/thecoderepublicturkey">🇹🇷 Türkiye</a>'deki ofisleri ile dünyanın dört bir yanında hizmet veren The Code Republic olarak; profesyonel ekibimiz ve güncel teknolojilerimiz ile işletmenizin geleceğini kodluyoruz! </p>

                    <div className="grid grid-cols-2 gap-4">
                        <Modal>
                            <Modal.Button className="bg-brand-primary cursor-pointer hover:bg-black text-white p-4 text-center rounded-xl text-lg">
                                Teklif Alın
                            </Modal.Button>
                            
                            <Modal.Content>
                                <div className="grid gap-4">
                                    <div className="grid gap-2 mb-2">
                                        <label className="text-3xl font-bold">Teklif Alın</label>
                                        <p className="text-black/50">Bizimle çalışmayı düşündüğünüz için teşekkür ederiz, hiç vakit kaybetmeden fiyat teklifi alın ve çalışmalara başlayalım</p>
                                    </div>

                                    <ContactForm/>
                                </div>
                            </Modal.Content>
                        </Modal>

                        <Link href="/hizmetlerimiz" className="text-brand-primary border-2 hover:bg-brand-primary/10 border-brand-primary p-4 text-center rounded-xl text-lg">
                            Hizmetlerimizi İnceleyin
                        </Link>
                    </div>
                </div>
            </MastheadSection.Left>

            <MastheadSection.Right>
                <Image
                    src={require('@images/masthead-photo.png')}
                    width="100%"
                    height="851"
                    alt="The Code Republic - Yazılım Şirketi"
                />
            </MastheadSection.Right>
        </MastheadSection>
    )
}