export default function FormSuccess() {
    return(
        <div className="grid gap-4 items-center content-center place-content-center text-center">
            <div className="grid mx-auto items-center content-center place-content-center w-24 h-24 rounded-full bg-green-900">
                <span className="block material-symbols-outlined !text-[48px]">done_all</span>
            </div>
            <span className="font-bold text-2xl">Kısa zamanda size dönüş yapacağız!</span>
            <p>Mesajınız başarılı bir biçimde gönderildi, ekibimiz 48 saat içerisinde sizinle iletişime geçiyor olacak, bizi tercih ettiğiniz teşekkür ederiz.</p>
        </div>
    )
}