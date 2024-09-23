interface Props {
    children : React.ReactNode
}

const CardLayout = (props : Props) => {
    return(
        <>
            <div className="h-auto w-40 flex flex-col gap-1 items-center">
                {props.children}
            </div>
        </>
    )
}

export default CardLayout