export default function FormFaield({...props}) {
    return(
        <div className="mx-auto grid gap-4 items-center content-center place-content-center text-center">
            <div className="grid mx-auto items-center content-center place-content-center w-24 h-24 rounded-full bg-red-900">
                <span className="block material-symbols-outlined !text-[48px]">done_all</span>
            </div>
            <span className="font-bold text-2xl">Bir hata oluştu</span>
            <p>Mesajınız gönderilirken bir hata oluştu, lütfen tekrar deneyin.</p>

            <button className="rounded-full border-2 border-white p-4 hover:border-violet-500 hover:text-violet-500" onClick={() => {
                props.self(false);
                props.retry(true);
            }}>Tekrar Dene</button>
        </div>
    )
}