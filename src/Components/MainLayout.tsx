interface Props {
    children : React.ReactNode  
}

const MainLayout = (props : Props) => {
    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-12">
                {props.children}
            </div>
        </>
    )
}

export default MainLayout