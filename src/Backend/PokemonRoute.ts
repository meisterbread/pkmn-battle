import express from "express"
import { fetchPokemon, pokemonBattle, randomPokemon } from "./PokemonController"

const pokemonRouter = express.Router()

pokemonRouter.get("/fetch/:pokemonName" , fetchPokemon)
pokemonRouter.get("/random", randomPokemon)
pokemonRouter.get("/battle/:pokeOneHealth/:pokeOneAttack/:pokeTwoHealth/:pokeTwoAttack", pokemonBattle)
    
export default pokemonRouter