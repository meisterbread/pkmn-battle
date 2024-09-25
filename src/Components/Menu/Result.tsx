interface Props {
    result : string
}

const Result = ({result} : Props) => {
    return(
        <div className="text-center">
            {result}
        </div>
    )
}

export default Result