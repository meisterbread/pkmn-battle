import express from "express"
import { fetchPokemon, randomPokemon } from "./PokemonController"

const pokemonRouter = express.Router()

pokemonRouter.get("/fetch/:pokemonName" , fetchPokemon)
pokemonRouter.get("/random", randomPokemon)
    
export default pokemonRouter