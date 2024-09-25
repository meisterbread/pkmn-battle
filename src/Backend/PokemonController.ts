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

// const randomPokemon = async(req : Request, res : Response) => {
//     try{
//         const id : number = Math.floor(Math.random() * 1025) + 1
//         const idString = id.toString()
//         console.log(id)

//         const test: number = 1

//         const response = await fetch(`${url}${test}`)
//         const data = (await response.json()) as PokemonModel

//         res.json(data)
//     }catch(e){
//         console.log(e)
//     }
// }

export {fetchPokemon, randomPokemon}