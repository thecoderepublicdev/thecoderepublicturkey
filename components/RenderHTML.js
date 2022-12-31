export default function RenderHTML({...props}) {
    return(
        <div dangerouslySetInnerHTML={{
            __html:  props.content?props.content:""
        }} />
    )
}