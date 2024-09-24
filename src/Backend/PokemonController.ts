import { Request,Response } from "express"
import { PokemonModel } from "./PokemonModel"

// controller = functions

const fetchPokemon = async(req : Request, res : Response) => {
    const pokemonName = req.params.pokemonName

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const response = await fetch(`${url}`)
    
        const data = (await response.json()) as PokemonModel
    
        res.json(data)
    } catch (e){
        console.log(e)
    }

}

export {fetchPokemon}