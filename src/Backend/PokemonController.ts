import { Request,Response } from "express"
import { PokemonModel } from "./PokemonModel"

const url = `https://pokeapi.co/api/v2/pokemon/`

const fetchPokemon = async(req : Request, res : Response) => {
    const pokemonName : string = req.params.pokemonName

    try{

        const response = await fetch(`${url}${pokemonName}`)
    
        const data = (await response.json()) as PokemonModel
    
        res.json(data)
    } catch (e){
        console.log(e)
    }

}

const randomPokemon = async(req: Request, res: Response) => {
    try{
        const id : Number = Math.floor(Math.random() * 1025) + 1
        console.log(id)

        const response = await fetch(`${url}${id}`)
    
        const data = (await response.json()) as PokemonModel
    
        res.json(data)
    } catch(error) {
        console.log(error)
    }
}

const pokemonBattle = async (req : Request, res : Response) => {
    const pokeOneAttack = Number(req.params.pokeOneAttack)
    let pokeOneHealth = Number(req.params.pokeOneHealth)

    const pokeTwoAttack = Number(req.params.pokeTwoAttack)
    let pokeTwoHealth = Number(req.params.pokeTwoHealth)

    try{

        console.log(`pokemone one hp: ${pokeOneHealth} atk ${pokeOneAttack}`)
        console.log(`pokemone two hp: ${pokeTwoHealth} atk ${pokeTwoAttack}`)

        pokeOneHealth -= pokeTwoAttack
        pokeTwoHealth -= pokeOneAttack

        console.log(`pokemone one hp: ${pokeOneHealth}`)
        console.log(`pokemone two hp: ${pokeTwoHealth}`)

        if(pokeOneHealth === pokeTwoHealth) {
            res.send({message: "The battle is a draw!"})
            console.log("draw")
        } else if (pokeTwoHealth <= pokeOneHealth){
            res.send({message: "You won the battle!"})
            console.log("win")
        } else if (pokeOneHealth <= pokeTwoHealth){
            res.send({message : "You lost the battle!"})
            console.log("lose")
        }


    }catch(error){
      console.log(error)
    }
}

export {fetchPokemon, randomPokemon, pokemonBattle}