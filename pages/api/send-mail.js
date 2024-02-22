import { render } from '@react-email/render';
import nodemailer from "nodemailer";
import dynamic from 'next/dynamic';
import ContactMail from '@templates/email/Contact';


export default async function handler(req, res) {
    const { formType, fields, isOfferForm, selectedServiceName } = await req.body;

    let MailTemplateModule;
    switch (formType) {
        case 'SERVICE_OFFER':
            MailTemplateModule = await import('@templates/email/Contact');
        case 'contact':
            MailTemplateModule = await import('@templates/email/Contact');
            break;
        case 'incorp':
            MailTemplateModule = await import('@templates/email/InCorp');
            break;
        default:
            MailTemplateModule = await import('@templates/email/Contact');
            break;
    }
    
    const MailTemplate = MailTemplateModule.default;

    switch (req.method) {
        case 'POST':
            const mailBody = await render(<MailTemplate isOfferForm={isOfferForm} selectedServiceName={selectedServiceName[0]} {...fields} />, {pretty: true})

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GOOGLE_ACCOUNT_EMAIL,
                    pass: process.env.GOOGLE_ACCOUNT_APP_PASSWORD,
                },
            });
        
            const mailOptions = {
                from: `The Code Republic Turkey <${process.env.GOOGLE_ACCOUNT_EMAIL}>`,
                to: 'contact@thecoderepublic.dev',
                subject: `Yeni bir form dolduruldu!`,
                html: mailBody
            }
        
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error("Mail Gönderme Hatası",error);
                    res.status(500).json({success: false, response: error});
                } else {
                    res.status(200).json({success: true, response: info});
                }
            })
            break;
    
        default:
            res.status(405).json({success: false, message: 'WRONG REST API REQUEST METHOD!'})
            break;
    }
}