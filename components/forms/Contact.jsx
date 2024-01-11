import React from 'react';
import * as Yup from 'yup';
import "yup-phone-lite";
import { ErrorMessage, FastField, Field, Form, Formik, isObject } from "formik";
import classNames from "classnames";
import axios from 'axios';
import { useState } from 'react';
import Alert from '@components/shared/Alert';
import { useMemo } from 'react';



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

function FormFieldsView({ formType, errors, status, touched, isSubmitting, setFieldValue }) {
    const FormFields = {
        Contact: [
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
                customRender: true,
                customRenderContent: (
                    <React.Fragment>
                        <FastField
                            id="message"
                            name="message"
                            as="textarea"
                            disabled={isSubmitting}
                            placeholder="Mesajınız"
                            className={classNames(
                                'p-4 rounded-xl border-2 bg-gray-100 border-transparent outline-none focus:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none max-h-[400px] focus:text-brand-primary', {
                                    '!border-red-500 bg-red-50 text-red-500': touched.message && errors.message
                                }
                            )}
                            onChange={(e) => setFieldValue("message", e.target.value)}
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 mt-2"/>
                    </React.Fragment>
                )
            },
        ],
        InCorp: [
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
                    <Fragment>
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
                    </Fragment>
                )
            }
        ],
    }

    const selectedFormFields = useMemo(() => {
        switch (formType) {
            case 'SERVICE_OFFER':
            case 'CONTACT':
                return FormFields.Contact;
            case 'INCORP':
                return FormFields.InCorp;
        }
    }, [formType]);

    return(
        <Form className="grid gap-4">
            {selectedFormFields?.map((field, key) => !field.customRender ? (
               <div key={key} className="grid">
                    <FastField
                        name={field.name}
                        type={field.type}
                        disabled={isSubmitting}
                        placeholder={field.placeholder}
                        className={classNames(
                            'p-4 rounded-xl border-2 bg-gray-100 border-transparent outline-none focus:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 focus:text-brand-primary', {
                                '!border-red-500 bg-red-50 text-red-500': field.states.touch && field.states.error
                            }
                        )}
                    />
                    <ErrorMessage name={field.name} component="div" className="text-red-500 mt-2"/>
               </div> 
            ) : field.customRenderContent)}

            <button type="submit" className="p-4 rounded-xl bg-brand-primary text-center font-bold text-lg text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50" disabled={isSubmitting}>
                {isSubmitting ? 'Lütfen Bekleyin...' : 'Gönder'}
            </button>
        </Form>
    )
}

export default function ContactForm({formType, selectedServiceName}) {
    const [IF_FORM_SENDED, setFormSentStatus] = useState();
    
    const Props = {
        Formik: {
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: ""
            },
            validationSchema: undefined,
            onSubmit: async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                await axios({
                    method: 'POST',
                    url: '/api/send-mail',
                    data: {
                        formType: formType,
                        fields: fields,
                        isOfferForm: isOfferForm,
                        selectedServiceName: selectedServiceName
                    }
                })
                .then((res) => {
                    setFormSentStatus(true)
                    setSubmitting(false)
                })
                .catch((err) => {
                    setFormSentStatus(false)
                })
            }
        }
    } 

    switch(formType) {
        case 'SERVICE_OFFER':
        case 'INCORP': 
            Props.validationSchema = Yup.object().shape({
                contactPersonName: Yup.string().required('İsim belirtmek zorunludur.'),
                contactPersonLastName: Yup.string().required('Soyisim belirtmek zorunludur.'),
                contactPersonMail: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('E-Posta adresi belirtmek zorunludur.'),
                contactPersonPhone: Yup.string().phone("TR", 'Lütfen Türkiye Cumhuriyeti için geçerli bir telefon numarası girin').required('Telefon Numarası belirtmek zorunludur.'),
                companyName: Yup.string().required('Şirket adı belirtmek zorunludur.'),
                companySize: Yup.string().required('Çalışan sayısı belirtmek zorunludur.').oneOf(["1-10","50-100","1.000 - 10.000","20.000'den fazla"], "Lütfen şirket çalışan sayısını düzgün seçiniz"),
            })
            break;

        case 'CONTACT':
            Props.validationSchema = Yup.object().shape({
                firstName: Yup.string().required('İsim belirtmek zorunludur.'),
                lastName: Yup.string().required('Soyisim belirtmek zorunludur.'),
                email: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('E-Posta adresi belirtmek zorunludur.'),
                phone: Yup.string().phone("TR", 'Lütfen Türkiye Cumhuriyeti için geçerli bir telefon numarası girin').required('Telefon Numarası belirtmek zorunludur.'),
                message: Yup.string()
            })
            break;
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
            ) : (props) => <FormFieldsView formType={formType} {...props} />}
            
        </Formik>
    )
}