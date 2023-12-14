import React from "react";

function LeftSide({children}) {
    return children;
}

function RightSide({children}) {
    return children;
}

export default function MastheadSection({children}) {
    const childrenArray = React.Children.toArray(children);

    const Childrens = {
      LeftSide: childrenArray.filter((c) => c.type === LeftSide),
      RightSide: childrenArray.filter((c) => c.type === RightSide),
    };

    return(
        <section className="min-h-[600px] grid place-content-center">
            <div className="xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 place-content-center place-items-center gap-8">
                    <div className="row-start-2 2xl:row-start-1 xl:row-start-1">
                        {Childrens.LeftSide}
                    </div>

                    <div className="p-4">
                        {Childrens.RightSide}
                    </div>
                </div>
            </div>
        </section>
    )
}

MastheadSection.Left = LeftSide
MastheadSection.Right = RightSide