export default function PricingCard({...props}) {
    return(
        <div className="relative mx-auto mb-8">
            <div className="mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
                <div className="flex-1 px-6 py-8 bg-zinc-900 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                        {props.title}
                    </h3>
                    <p className="mt-6 text-base text-gray-300">
                        {props.description}
                    </p>

                    {(props.features)?? (
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-zinc-900">Features</h4>
                                <div className="flex-1 border-t-2 border-gray-700"></div>
                            </div>
                            <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {props.features.map((feature, key) => {return(
                                    <li key={key} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>
                                        <p className="ml-3 text-sm text-white">{feature}</p>
                                    </li>
                                )})}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="px-6 py-8 text-center bg-zinc-800 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-white">
                        <span>Teklif Alın</span>
                    </div>
                    <div className="mt-6">
                        <div className="rounded-md shadow">
                            <a href={'mailto:contact@thecoderepublic.dev?subject=[' + props.title + ']' + 'için fiyat teklifi almak istiyorum'} className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-black bg-white border border-transparent rounded-md hover:bg-transparent hover:border-white hover:text-white" target="_blank">Bize Yazın</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}