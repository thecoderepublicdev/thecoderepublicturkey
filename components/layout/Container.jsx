export default function Container({children}) {
    return(
        <div className="container xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
            {children}
        </div>
    )
}