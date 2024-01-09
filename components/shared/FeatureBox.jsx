const Name = ({children}) => {
    return <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{children}</h2>
}


const Description = ({children}) => {
    return <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{children}</p>
}

const Thumbnail = ({width, height, alt, children}) => {
    return(
        <img
            className="bg-black/5 overflow-hidden"
            src={children}
            alt={alt}
        />
    )
}

export default function FeatureBox({url, children}) {
    const Childrens = {
        Name: children.filter(c => c.type === Name),
        Description: children.filter(c => c.type === Description),
        Thumbnail: children.filter(c => c.type === Thumbnail),
    }

    return(
        <div className="bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
            <a href="#">
                {Childrens.Thumbnail}
            </a>
            <div className="p-5">
                {Childrens.Name}
                {Childrens.Description}
            </div>
        </div>

    )
}

FeatureBox.Title = Name;
FeatureBox.Description = Description;
FeatureBox.Thumbnail = Thumbnail;