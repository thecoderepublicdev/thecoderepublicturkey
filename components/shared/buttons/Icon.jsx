function Icon({children}) {
    return(
        <div className="rounded-xl bg-transparent text-brand-primary border border-gray-300 px-3 py-2 w-16 h-16 grid items-center content-center md:py-4">
            <span className="material-symbols-outlined mx-auto">{children}</span>
        </div>
    )
}

function Title({children}) {
    return(
        <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:text-brand-primary">
            {children}
        </div>
    )
}

function Description({children}) {
    return(
        <div className="font-semibold text-sm md:text-md lg:text-lg text-gray-400 group-hover:text-gray-500 transition-all duration-200 delay-100">
            {children}
        </div>
    )
}

export default function IconButton({url, showArrow, children}) {
    const Childrens = {
        Icon: children.filter(c => c.type === Icon),
        Title: children.filter(c => c.type === Title),
        Description: children.filter(c => c.type === Description),
    }

    return(
        <a href={url} className="no-underline rounded-xl hover:bg-brand-primary/5">
            <div className="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100">
                {Childrens.Icon}
                <div className="grow flex flex-col pl-5 pt-2">
                    {Childrens.Title}
                    {Childrens.Description}
                </div>

                {showArrow && <span className="material-symbols-outlined">keyboard_arrow_right</span>}
            </div>
        </a>
    )
}

IconButton.Icon = Icon;
IconButton.Title = Title;
IconButton.Description = Description;