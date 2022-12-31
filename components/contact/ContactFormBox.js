import { useRef, useState } from "react";
import { send } from "emailjs-com";
import FormSuccess from "./FormSuccess";
import ContactForm from "./Form";
import FormFailed from "./FormFailed";

export default function ContactFormBox() {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const mailData = {
        name: name,
        surname: surname,
        mail: email,
        phone_number: phone,
        subject: subject,
        message: message,
        reply_to: email
    };

    console.log(mailData);

    const handleOnSubmit = (e) => {
        e.preventDefault();
            
        send('service_0pyvigd', 'tcr_template_one', mailData, 'eYAeJil3kPbZUXs42')
        .then((response) => {
            console.log(response.status, response.text);
            setIsFormVisible(false);
            setIsSuccess(true);
        })
        .catch((error) => {
            console.log(error);
            setIsFormVisible(false);
            setIsFailed(true);
        });
    }
    
    return(
        <div className="flex content-center items-center bg-zinc-900 p-8 rounded-xl min-h-[400px]">
            {(isFormVisible) ? (
                <ContactForm
                    onSubmit={handleOnSubmit}
                    onChange={handleOnSubmit}
                    setName={setName}
                    setSurname={setSurname}
                    setEmail={setEmail}
                    setPhone={setPhone}
                    setSubject={setSubject}
                    setMessage={setMessage}
                />
            ): null}

            {(isSuccess) ? (
                <FormSuccess/>
            ) : null}

            {(isFailed) ? (
                <FormFailed self={setIsFailed} retry={setIsFormVisible}/>
            ) : null}
        </div>
    )
}