import { render } from '@react-email/render';
import nodemailer from "nodemailer";
import InCorpMeetingMail from '@templates/email/InCorp';

export default async function handler(req, res) {
    const {
        contactPersonName,
        contactPersonLastName,
        contactPersonPhone,
        contactPersonMail,
        companyName,
        companySize
    } = req.body;

    switch (req.method) {
        case 'POST':
            const mailBody = await render(
                <InCorpMeetingMail
                    contactPersonName={contactPersonName}
                    contactPersonLastName={contactPersonLastName}
                    contactPersonPhone={contactPersonPhone}
                    contactPersonMail={contactPersonMail}
                    companyName={companyName}
                    companySize={companySize}
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
                subject: `Şirket içi Özel Yazılım Toplantı Talebi`,
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