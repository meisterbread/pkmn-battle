import Header from './Components/Header'
import Card from './Components/Card/Card'
import Ditto from './assets/ditto.png'
import Charmander from './assets/charmander.png'
import MainLayout from './Components/MainLayout'

function App() {
  return (
    <>
      <Header title='Pokemon Battle Simulator'/>
      <MainLayout>
        <Card name={"Ditto"} health={132} attack={40} url={Ditto}></Card>
        <h1 className='text-3xl font-bold text-red-500'>Versus</h1>
        <Card name={"Charmander"} health={150} attack={52} url={Charmander}></Card>
      </MainLayout>
    </>
  )
}

export default App
