import Button from "./Button"
import MenuBox from "./MenuBox"
import Result from "./Result"

interface Props{
    result : string
}

const Menu = ({result} : Props) => {

    function test(){
        console.log("test lang to")
    }

    return(
        <MenuBox>
            <Result result={result} />
            <input className="h-8 p-3 border-gray-700 border-2 rounded-lg"></input>
            <Button body="bg-red-400" border="border-red-300" onclick={test}>Battle</Button>
            <Button body="bg-blue-400" border="border-blue-300" onclick={test}>Swap Pokemon</Button>
            <Button body="bg-orange-400" border="border-orange-300" onclick={test}>Change Opponent</Button>
        </MenuBox>
    )
}

export default Menu