export default function SectionHeader({...props}) {
    return(
        <div className={props.align === 'left' ? 'text-white mb-10 lg:text-start' : 'px-4 sm:px-6 lg:px-8 mb-10 lg:text-center text-white'} >
            <h2 className="font-body tracking-tighter text-lg text-violet-600 font-semibold">
                {props.subTitle}
            </h2>
            <h1 className="font-body tracking-tighter mt-2 text-3xl leading-8 font-bold tracking-tight text-whitew sm:text-4xl sm:tracking-tight">
                {props.title}
            </h1>
            <p className={props.align === 'left' ? 'font-body tracking-tighter mt-4 max-w-2xl text-xl text-gray-500' : 'font-body tracking-tighter mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'}>
                {props.description}
            </p>
        </div>
    );
}