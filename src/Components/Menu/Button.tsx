interface Props {
    children : React.ReactNode
    border : string,
    body : string,
    onClick : () => void;
}

const Button = (props : Props) => {
    return(
    <>
        <button className={`min-h-5 min-w-36 p-1 text-center text-lg rounded-lg text-white ${props.border} ${props.body} border-4`} onClick={props.onClick}>
            {props.children} 
        </button>
    </>
    )
}

export default Button