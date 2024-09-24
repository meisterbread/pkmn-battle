interface Props {
    children : React.ReactNode
    border : string,
    body : string,
    onclick : (event : React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props : Props) => {
    return(
    <>
        <button className={`min-h-5 min-w-32 text-center text-lg rounded-lg text-white ${props.border} ${props.body} border-4`} onClick={props.onclick}>
            {props.children} 
        </button>
    </>
    )
}

export default Button