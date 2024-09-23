interface Props {
    title : string
}

function Header(props : Props) {
    return(
        <>
            <h1 className="text-4xl font-bold text-center mt-10 mb-10">{props.title}</h1>
        </>
    )
}

export default Header;