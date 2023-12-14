import React, { useState } from 'react';
import * as Yup from 'yup';
import "yup-phone-lite";
import { ErrorMessage, Field, Form, Formik } from "formik";
import classNames from "classnames";
import axios from 'axios';
import Alert from '@components/shared/Alert';

const CompanySizeOptions = [
    {
        text: "Şirketinizin çalışan sayısı",
        value: "",
    },
    {
        text: "1-10",
        value: "1-10",
    },
    {
        text: "50-100",
        value: "50-100",
    },
    {
        text: "1.000 - 10.000",
        value: "1.000 - 10.000",
    },
    {
        text: "20.000'den fazla",
        value: "20.000'den fazla", 
    }
]


function FormFields({ errors, status, touched, isSubmitting, setFieldValue }) {
    const Fields = [
        {
            name: "contactPersonName",
            placeholder: "Adınız",
            type: "text",
            states: {
                touch: touched.contactPersonName,
                error: errors.contactPersonName,
            }
        },
        {
            name: "contactPersonLastName",
            placeholder: "Soyadınız",
            type: "text",
            states: {
                touch: touched.contactPersonLastName,
                error: errors.contactPersonLastName,
            }
        },
        {
            name: "contactPersonPhone",
            placeholder: "Telefon Numaranız",
            type: "phone",
            states: {
                touch: touched.contactPersonPhone,
                error: errors.contactPersonPhone,
            }
        },
        {
            name: "contactPersonMail",
            placeholder: "E-Posta Adresi",
            type: "email",
            states: {
                touch: touched.contactPersonMail,
                error: errors.contactPersonMail,
            }
        },
        {
            name: "companyName",
            placeholder: "Şirketinizin Adı",
            type: "text",
            states: {
                touch: touched.companyName,
                error: errors.companyName,
            }
        },
        {
            customRender: true,
            customRenderContent: () => (
                <React.Fragment>
                    <Field
                        id="companySize"
                        name="companySize"
                        as="select"
                        placeholder="Şirketinizin çalışan sayısı"
                        className={classNames(
                            'p-4 rounded-xl border-2 bg-gray-100 border-transparent outline-none focus:border-brand-primary focus:text-brand-primary', {
                                '!border-red-500 bg-red-50 text-red-500': touched.companySize && errors.companySize
                            }
                        )}
                        onChange={(e) => setFieldValue("companySize", e.target.value)}
                    >
                        {CompanySizeOptions.map((item, key) => (
                            <option key={key} value={item.value}>{item.text}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="companySize" component="div" className="text-red-500 mt-2"/>
                </React.Fragment>
            )
        }
    ];


    return(
        <Form className="grid gap-4">
            {Fields.map((field, key) => !field.customRender ? (
               <div key={key} className="grid">
                    <Field
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={classNames(
                            'p-4 rounded-xl border-2 bg-gray-100 border-transparent outline-none focus:border-brand-primary focus:text-brand-primary', {
                                '!border-red-500 bg-red-50 text-red-500': field.states.touch && field.states.error
                            }
                        )}
                    />
                    <ErrorMessage name={field.name} component="div" className="text-red-500 mt-2"/>
               </div> 
            ) : <field.customRenderContent key={key}/>)}

            <button type="submit" className="p-4 rounded-xl bg-brand-primary text-center font-bold text-lg text-white disabled:bg-gray-300 disabled:text-gray-500" disabled={isSubmitting}>Gönder</button>
        </Form>
    )
}

export default function CompanyContactForm() {
    const [IF_FORM_SENDED, setFormSentStatus] = useState();

    const Props = {
        Formik: {
            initialValues: {
                contactPersonName: "",
                contactPersonLastName: "",
                contactPersonPhone: "",
                contactPersonMail: "",
                companyName: "",
                companySize: "",
            },
            validationSchema: Yup.object().shape({
                contactPersonName: Yup.string().required('İsim belirtmek zorunludur.'),
                contactPersonLastName: Yup.string().required('Soyisim belirtmek zorunludur.'),
                contactPersonMail: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('E-Posta adresi belirtmek zorunludur.'),
                contactPersonPhone: Yup.string().phone("TR", 'Lütfen Türkiye Cumhuriyeti için geçerli bir telefon numarası girin').required('Telefon Numarası belirtmek zorunludur.'),
                companyName: Yup.string().required('Şirket adı belirtmek zorunludur.'),
                companySize: Yup.string().required('Çalışan sayısı belirtmek zorunludur.').oneOf(["1-10","50-100","1.000 - 10.000","20.000'den fazla"], "Lütfen şirket çalışan sayısını düzgün seçiniz"),
            }),
            onSubmit: async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                await axios({
                    method: 'POST',
                    url: '/api/incorp',
                    data: values
                })
                .then((res) => {
                    console.log("response", res.data)
                    setFormSentStatus(true)
                    setSubmitting(false)
                    console.log('IF_FORM_SENDED', IF_FORM_SENDED)
                })
                .catch((err) => {
                    setFormSentStatus(false)
                    console.log('IF_FORM_SENDED', IF_FORM_SENDED)
                    console.log("error", err)
                })
            }
        }
    } 

    return(
        <Formik {...Props.Formik}>
            {(typeof IF_FORM_SENDED === 'boolean') ? (
                <Alert type={IF_FORM_SENDED ? 'success' : 'error'}>
                    <Alert.Title>
                        {IF_FORM_SENDED ? 'Bizimle iletişime geçtiğiniz teşekkürler' : 'Bir hata oluştu!'}
                    </Alert.Title>
                    <Alert.Description>
                        {IF_FORM_SENDED ? 'Ekibimiz 48 saat içerisinde sizlerle iletişime geçecektir. Bizi tercih ettiğiniz için teşekkürler' : 'Form gönderilirken bir hata oluştu, teknik ekibimize konu hakkında bildiri geçtik, tekrardan dener misiniz?'}
                    </Alert.Description>
                </Alert>
            ) : (props) => <FormFields {...props} />}
            
        </Formik>
    )
}