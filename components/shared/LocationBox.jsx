function Country({children}) {
    return(
        <label className="text-2xl font-bold">{children}</label>
    )
}
function Mail({children}) {
    if(children.length > 0) {
        return(
            <div className="flex align-center items-center gap-2">
                <span className="material-symbols-outlined text-brand-primary">mail</span>
                <label>{children}</label>
            </div>
        )
    }
}
function Phone({children}) {
    if(children.length > 0) {
        return(
            <div className="flex align-center items-center gap-2">
                <span className="material-symbols-outlined text-brand-primary">phone</span>
                <label>{children}</label>
            </div>
        )
    }
}
function Address({children}) {
    if(children.length > 0) {
        return(
            <div className="flex align-center items-center gap-2">
                <span className="material-symbols-outlined text-brand-primary">map</span>
                <label>{children}</label>
            </div>
        )
    }
}

export default function LocationBox({children}) {
    const Childrens = {
        Country: children.filter(c => c.type === Country),
        Mail: children.filter(c => c.type === Mail),
        Phone: children.filter(c => c.type === Phone),
        Address: children.filter(c => c.type === Address),
    }

    return(
        <div className='bg-white rounded-xl p-6 grid gap-4'>
            <div className='w-20 h-20 bg-brand-primary/5 text-brand-primary grid place-items-center place-content-center rounded-full'>
                <span className="block material-symbols-outlined !text-4xl">location_on</span>
            </div>

            <div className="grid gap-4">
                {Childrens.Country}
                {Childrens.Phone}
                {Childrens.Address}
                {Childrens.Mail}
            </div>
        </div>
    )
}

LocationBox.Country = Country
LocationBox.Mail = Mail;
LocationBox.Phone = Phone;
LocationBox.Address = Address;