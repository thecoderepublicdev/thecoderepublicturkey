import { render } from '@react-email/render';
import nodemailer from "nodemailer";
import ContactMail from "@templates/email/Contact";
import dynamic from 'next/dynamic';


export default async function handler(req, res) {
    const { formType, fields } = await req.body;
    const MailTemplate = await dynamic(() => {
        switch(formType) {
            case 'contact':
                import('@templates/email/Contact')
                break;
            case 'incorp':
                import('@templates/email/InCorp');
        }
    })

    switch (req.method) {
        case 'POST':
            const mailBody = await render(<MailTemplate {...fields}/>, {pretty: true})

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
                    console.error(error);
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