export default function IconBox({...props}) {
    return(
        <div className="font-body tracking-tighter group transition-all relative rounded-xl p-5 h-400">
            <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                    <span className="material-symbols-outlined">
                        {props.icon}
                    </span>
                </div>
                <p className="font-body tracking-tighter ml-16 text-lg leading-6 font-medium text-white">
                    {props.title}
                </p>
            </dt>
            <dd className="font-body tracking-tighter mt-2 ml-16 text-base text-gray-500">
                {props.description}
            </dd>
        </div>
    )
}