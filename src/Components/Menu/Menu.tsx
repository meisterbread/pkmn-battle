import Button from "./Button"
import MenuBox from "./MenuBox"
import Result from "./Result"

const Menu = () => {

    function test(){
        console.log("test lang to")
    }
    return(
        <MenuBox>
            <Result/>
            <input className="h-8 p-3 border-gray-700 border-2 rounded-lg"></input>
            <Button body="bg-red-400" border="border-red-300" onclick={test}>Battle</Button>
            <Button body="bg-orange-400" border="border-orange-300" onclick={test}>Enter</Button>
        </MenuBox>
    )
}

export default Menu