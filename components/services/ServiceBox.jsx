import Modal from "@components/shared/Modal"

const Name = ({children}) => {
    return <h1 className="font-bold text-4xl">{children}</h1>
}

const Description = ({children}) => {
    return <p className="text-gray-500">{children}</p>
}

export default function ServiceBox({url, children}) {
    const Childrens = {
        Name: children.filter(c => c.type === Name),
        Description: children.filter(c => c.type === Description),
    }
    return(
        <div className="flex justify-between gap-6 items-center content-center py-6 rounded bg-slate-100">
            <div className="grid gap-4 w-full">
                {Childrens.Name}
                {Childrens.Description}
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
                <Modal>
                    <Modal.Trigger className="bg-brand-primary text-white p-4 text-center rounded-xl text-lg">
                        Teklif Al
                    </Modal.Trigger>

                    <Modal.Content></Modal.Content>
                </Modal>
                <a className="text-brand-primary border-2 hover:bg-brand-primary/10 border-brand-primary p-4 text-center rounded-xl text-lg">
                    Detaylı Bilgi Al
                </a>       
            </div>
        </div>
    )
}

ServiceBox.Name = Name;
ServiceBox.Description = Description;