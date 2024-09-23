interface Props {
    children : React.ReactNode
}

const MainLayout = (props : Props) => {
    return(
        <>
            <div className="flex flex-row gap-20 items-center justify-center ">
                {props.children}
            </div>
        </>
    )
}

export default MainLayout