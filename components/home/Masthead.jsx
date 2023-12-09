import Modal from "@components/shared/Modal";
import classNames from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from 'react-select'
import Link from "next/link";
import * as Yup from 'yup';
import "yup-phone-lite";
import MastheadSection from "@components/layout/Masthead";

function CollectOfferForm(values, { setSubmitting, resetForm }) {
    setSubmitting(true);
    console.log(values);
    return(
        <></>
    )
}

const Services = [
    {value: "Kurumsal İnternet Sitesi", label: "Kurumsal İnternet Sitesi"},
    {value: "E-Ticaret Sitesi", label: "E-Ticaret Sitesi"},
    {value: "Arayüz Tasarımı (UI & UX)", label: "Arayüz Tasarımı (UI & UX)"},
    {value: "Mobil Uygulama", label: "Mobil Uygulama"},
    {value: "Video Düzenleme", label: "Video Düzenleme"},
    {value: "Marka Yönetimi", label: "Marka Yönetimi"},
    {value: "Logo & Kartvizit Tasarımı (Markalama)", label: "Logo & Kartvizit Tasarımı (Markalama)"},
    {value: "Grafik Tasarım", label: "Grafik Tasarım"}
];

function OfferFormFields({ errors, status, touched, isSubmitting }) {
    const Fields = [
        {
            name: "firstName",
            placeholder: "Adınız",
            type: "text",
            states: {
                touch: touched.firstName,
                error: errors.firstName,
            }
        },
        {
            name: "lastName",
            placeholder: "Soyadınız",
            type: "text",
            states: {
                touch: touched.lastName,
                error: errors.lastName,
            }
        },
        {
            name: "email",
            placeholder: "E-Posta Adresiniz",
            type: "email",
            states: {
                touch: touched.email,
                error: errors.email,
            }
        },
        {
            name: "phone",
            placeholder: "Telefon Numaranız",
            type: "phone",
            states: {
                touch: touched.phone,
                error: errors.phone,
            }
        },
        {
            name: "message",
            states: {
                touch: touched.message,
                error: errors.message,
            },
            customRender: true,
            customRenderContent: <textarea
                name="message"
                placeholder="Mesajınız"
                className={classNames(
                    'p-4 rounded-xl border-2 border-gray-200 outline-none focus:border-brand-primary focus:text-brand-primary', {
                        'border-red-500 bg-red-50 text-red-500': touched.message && errors.message
                    }
                )}
            />,
        },
    ];



    return(
        <Form className="grid gap-4">
            {Fields.map((field, key) => !field.customRender ? (
               <div key={key} className="grid">
                    <Field
                        key={key}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={classNames(
                            'p-4 rounded-xl border-2 border-gray-200 outline-none focus:border-brand-primary focus:text-brand-primary', {
                                'border-red-500 bg-red-50 text-red-500': field.states.touch && field.states.error
                            }
                        )}
                    />
                    <ErrorMessage name={field.name} component="div" className="text-red-500 mt-2"/>
               </div> 
            ) : field.customRenderContent)}

            <button type="submit" className="p-4 rounded-xl bg-brand-primary text-center font-bold text-lg text-white disabled:bg-gray-300 disabled:text-gray-500" disabled={isSubmitting}>Gönder</button>
        </Form>
    )
}

function OfferForm() {
    const Props = {
        Formik: {
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                selectedService: "",
                message: ""
            },
            validationSchema: Yup.object().shape({
                firstName: Yup.string().required('İsim belirtmek zorunludur.'),
                lastName: Yup.string().required('Soyisim belirtmek zorunludur.'),
                email: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('E-Posta adresi belirtmek zorunludur.'),
                phone: Yup.string().phone("TR", 'Lütfen Türkiye Cumhuriyeti için geçerli bir telefon numarası girin').required('Telefon Numarası belirtmek zorunludur.'),
                message: Yup.string()
            }),
            onSubmit: (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values);
            }
        }
    } 
    return(
        <Formik {...Props.Formik}>
            {(props) => <OfferFormFields {...props} />}
        </Formik>
    )
}

export default function Masthead() {
    return(
        <MastheadSection>
            <MastheadSection.Left>
                <div className="p-4 grid gap-4">
                    <h1 className="font-bold text-7xl text-brand-primary">İşletmenizin Geleceğini Kodluyoruz!</h1>
                    <p className="text-black/50 text-lg">The Code Republic olarak; profesyonel ekibimiz ve güncel teknolojilerimiz ile işletmenizin geleceğini kodluyoruz! </p>

                    <div className="grid grid-cols-2 gap-4">
                        <Modal>
                            <Modal.Trigger className="bg-brand-primary text-white p-4 text-center rounded-xl text-lg">
                                Teklif Alın
                            </Modal.Trigger>

                            <Modal.Content>
                                <div className="grid gap-4 max-w-[400px]">
                                    <label className="text-3xl font-bold">Teklif Alın</label>
                                    <p className="text-black/50">Bizimle çalışmayı düşündüğünüz için teşekkür ederiz, hiç vakit kaybetmeden fiyat teklifi alın ve çalışmalara başlayalım</p>

                                    <OfferForm/>
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
                <h1>selam canım</h1>
            </MastheadSection.Right>
        </MastheadSection>
    )
}