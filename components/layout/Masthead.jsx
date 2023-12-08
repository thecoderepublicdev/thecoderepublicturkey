function LeftSide({children}) {
    console.log("leftside func", children)
    return children;
}

function RightSide({children}) {
    return children;
}

export default function MastheadSection({children}) {
    const Childrens = {
        LeftSide: children.filter(c => c.type === LeftSide),
        RightSide: children.filter(c => c.type === RightSide),
    }

    return(
        <section className="min-h-[600px] grid place-content-center">
            <div className="max-w-screen-xl rounded-xl mx-auto overflow-hidden">
                <div className="grid grid-cols-2 place-content-center place-items-center gap-4">
                    <div>
                        {Childrens.LeftSide}
                    </div>

                    <div>
                        {Childrens.RightSide}
                    </div>
                </div>
            </div>
        </section>
    )
}

MastheadSection.Left = LeftSide
MastheadSection.Right = RightSide