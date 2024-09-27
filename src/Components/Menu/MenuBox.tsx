import React from "react";

interface Props {
    children : React.ReactNode
}

const MenuBox = (props : Props) => {
    return(
        <>
            <div className="w-[720px] h-36 border-2 bg-gray-200 border-gray-700 rounded-lg flex flex-col gap-5 justify-center items-center">
                {props.children}
            </div>
        </>
    )
}

export default MenuBox