import express from "express"
import { fetchPokemon } from "./PokemonController"

const pokemonRouter = express.Router()

pokemonRouter.get("/fetch/:pokemonName" , fetchPokemon)
    
export default pokemonRouter