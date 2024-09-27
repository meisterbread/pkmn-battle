import { ReactElement, useState } from "react"
import Button from "./Button"
import MenuBox from "./MenuBox"
import Result from "./Result"

interface Props{
    result : string
    onBattleClick : () => void;
    onRandom : () => void;
    onSwap : (name : string) => void;
}

const Menu = ({result, onBattleClick, onRandom, onSwap} : Props) => {

    const [pokemonName, setPokemonName] = useState("")

    const handleName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)
    }
    

    return(
        <MenuBox>
            <Result result={result} />
            <input className="h-8 p-3 border-gray-700 border-2 rounded-lg" placeholder="Enter Pokemon" onChange={handleName} value={pokemonName}></input>
            <div className="flex gap-5">
                <Button body="bg-red-400" border="border-red-300" onClick={onBattleClick}>Battle</Button>
                <Button body="bg-blue-400" border="border-blue-300" onClick={() => {onSwap(pokemonName)}}>Swap Pokemon</Button>
                <Button body="bg-orange-400" border="border-orange-300" onClick={onRandom}>Change Opponent</Button>
            </div>
        </MenuBox>
    )
}

export default Menu