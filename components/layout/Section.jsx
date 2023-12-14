function Content({children}) {
    return children
}

export default function Section({children}) {
    return(
        <section className="xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
            {children}
        </section>
    )
}

Section.Content = Content;