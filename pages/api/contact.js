import { render } from '@react-email/render';
import nodemailer from "nodemailer";
import ContactMail from "@templates/email/Contact";


export default async function handler(req, res) {
    const {firstName, lastName, email, phone, message} = req.body;

    switch (req.method) {
        case 'POST':
            const mailBody = await render(
                <ContactMail
                    firstName={firstName}
                    lastName={lastName}
                    mail={email}
                    phone={phone}
                    message={message}
                />, {pretty: true}
            )

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
                subject: `${firstName} iletişime geçmek istiyor!`,
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