export default function Aside({...props}) {
    return(
        <aside className={props?.class} id={props?.children}>
            {props.children}
        </aside>
    )
}