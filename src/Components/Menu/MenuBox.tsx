import React from "react";

interface Props {
    children : React.ReactNode
}

const MenuBox = (props : Props) => {
    return(
        <>
            <div className="w-8/12 h-32 border-2 bg-gray-200 border-gray-700 rounded-lg flex gap-5 justify-center items-center">
                {props.children}
            </div>
        </>
    )
}

export default MenuBox