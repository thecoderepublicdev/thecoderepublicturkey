import classNames from "classnames";

export default function Container({
    flex,
    centered = false,
    height,
    children
}) {
    return(
        <div className={classNames(
            "container xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto", {
                ['flex']: (typeof flex === 'object' && Object.keys(flex).length > 0),
                [`gap-${flex.gap}`]: flex.gap,
                ['flex-col']: flex.column,
                ['flex-row']: flex.row,
                [`h-[${height}px]`]: height,
                ["justify-center align-center content-center items-center"]: centered,
            }
        )}>
            {children}
        </div>
    )
}