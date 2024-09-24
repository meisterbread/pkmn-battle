import Header from './Components/Header'
import Card from './Components/Card/Card'
import Ditto from './assets/ditto.png'
import Charmander from './assets/charmander.png'
import MainLayout from './Components/MainLayout'
import { useState,useEffect } from 'react'
import { response } from 'express'
import { PokemonModel } from './Backend/PokemonModel'

function App() {

  const [pokemonOne, setPokemonOne] = useState<PokemonModel | null>(null);

  const [pokemonName, setPokemonName] = useState("dragonair")


  const fetchData = async (name : string) => {
    try {
      const response = await fetch(`http://localhost:3000/pokemon/fetch/${name}`)

      const data = (await response.json()) as PokemonModel

      setPokemonOne(data)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header title='Pokemon Battle Simulator'/>
      <MainLayout>
        <Card name={pokemonOne?.name.toUpperCase()} health={pokemonOne?.stats.find(stat => stat.stat.name === 'hp')?.base_stat} attack={pokemonOne?.stats.find(stat => stat.stat.name === 'attack')?.base_stat} url={pokemonOne?.sprites.front_default}></Card>
        <h1 className='text-3xl font-bold text-red-500'>Versus</h1>
        <Card name={"Charmander"} health={150} attack={52} url={Charmander}></Card>
      </MainLayout>
      <button onClick={ () => { fetchData(pokemonName);}}>test</button>
    </>
  )
}

export default App
