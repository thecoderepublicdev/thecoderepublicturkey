export default function Services({...props}) {
    return(
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
            <div className="TCRContainer">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                            <span className="font-light text-lg text-gray-500 mb-2 block">{props.subTitle}</span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-violet-600 mb-4">
                                {props.title}
                            </h2>
                            <p className="text-base text-gray-300">{props.description}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-y-8">
                    {props.services.map((service, key) => {return(
                        <div key={key} className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="min-h-full p-10 md:px-7 xl:px-10 rounded-[20px] bg-zinc-900 shadow-md hover:shadow-lg mb-8 border-2 border-transparent hover:border-violet-600">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-violet-600 rounded-2xl mb-8">
                                    <span className="material-symbols-outlined">{service.icon}</span>
                                </div>
                                <h4 className="font-semibold text-xl text-white mb-3">{service.title}</h4>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    )
}