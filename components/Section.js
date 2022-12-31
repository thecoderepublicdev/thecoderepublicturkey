export default function Section({...props}) {
    return(
        <section className={props?.class ?? props?.tags} id={props.title}>
            {props.children}
        </section>
    )
}