import Header from './Components/Header'
import Card from './Components/Card/Card'
import Menu from './Components/Menu/Menu'
import { useState } from 'react'
import { PokemonModel } from './Backend/PokemonModel'
import PokemonLayout from './Components/PokemonLayout'
import MainLayout from './Components/MainLayout'

function App() {

  const [pokemonOne, setPokemonOne] = useState<PokemonModel | null>(null);
  const [pokemonTwo, setPokemonTwo] = useState<PokemonModel | null>(null);

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

  const fetchRandom = async() => {
    try{
      const response = await fetch(`http://localhost:3000/pokemon/random`)

      const data = (await response.json()) as PokemonModel

      setPokemonTwo(data)
    } catch (error){
      console.log(error)
    }
  }

  return (
    <>
      <MainLayout>
      <Header title='Pokemon Battle Simulator'/>
        <PokemonLayout>
          <Card name={pokemonOne?.name.toUpperCase()} health={pokemonOne?.stats.find(stat => stat.stat.name === 'hp')?.base_stat} attack={pokemonOne?.stats.find(stat => stat.stat.name === 'attack')?.base_stat} url={pokemonOne?.sprites.front_default}></Card>
          <h1 className='text-3xl font-bold text-red-500'>Versus</h1>
          <Card name={pokemonTwo?.name.toUpperCase()} health={pokemonTwo?.stats.find(stat => stat.stat.name === 'hp')?.base_stat} attack={pokemonTwo?.stats.find(stat => stat.stat.name === 'attack')?.base_stat} url={pokemonTwo?.sprites.front_default}></Card>
        </PokemonLayout>
        <Menu/>
        <input placeholder='Enter Pokemon'></input>
        <button onClick={ () => { fetchData(pokemonName);}}>test</button>
        <button onClick={() => {fetchRandom()}}>test 2</button>

      </MainLayout>
    </>
  )
}

/*    
     
*/

export default App
