import express from 'express'
import pokemonRouter from './PokemonRoute'
import cors from 'cors'


const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

app.use("/pokemon", pokemonRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
