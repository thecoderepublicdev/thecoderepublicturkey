export default function ContactForm({...props}) {

    return(
        <form onSubmit={props.onSubmit} className="grid w-full gap-4">
            <section>
                <input
                    required 
                    name="name"
                    id="name"
                    type="text"
                    onChange={(e) => props.setName(e.target.value)}
                    className="w-full p-4 rounded bg-transparent text-white outline-none border-gray-400 focus:border-white border-2" 
                    placeholder="Adınız"/>
            </section>

            <section>
                <input
                    required 
                    name="surname"
                    id="surname"
                    type="text"
                    onChange={(e) => props.setSurname(e.target.value)}
                    className="w-full p-4 rounded bg-transparent text-white outline-none border-gray-400 focus:border-white border-2" 
                    placeholder="Soyadınız"/>
            </section>

            <section>
                <input
                    required
                    name="email"
                    id="email" 
                    type="email"
                    onChange={(e) => props.setEmail(e.target.value)}
                    className="w-full p-4 rounded bg-transparent text-white outline-none border-gray-400 focus:border-white border-2" 
                    placeholder="E-Posta Adresiniz"/>
            </section>

            <section>
                <input
                    required
                    name="phone"
                    id="phone"
                    type="phone"
                    onChange={(e) => props.setPhone(e.target.value)}
                    className="w-full p-4 rounded bg-transparent text-white outline-none border-gray-400 focus:border-white border-2" 
                    placeholder="Telefon Numaranız"/>
            </section>

            <section>
                <input
                    required
                    name="subject" 
                    id="subject" 
                    type="text"
                    onChange={(e) => props.setSubject(e.target.value)}
                    className="w-full p-4 rounded bg-transparent text-white outline-none border-gray-400 focus:border-white border-2" 
                    placeholder="Konu"/>
            </section>

            <section>
                <textarea
                    required
                    name="message" 
                    id="message" 
                    onChange={(e) => props.setMessage(e.target.value)}
                    className="w-full min-h-[200px] p-4 rounded bg-transparent text-white outline-none border-gray-400 focus:border-white border-2" 
                    placeholder="Mesajınız"/>
            </section>

            <button 
                type="submit" 
                className="text-lg min-h-[60px] w-full p-4 bg-white rounded text-black hover:bg-violet-900 hover:text-white">Gönder</button>
        </form>
    )
}