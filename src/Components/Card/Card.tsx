import CardLayout from "./CardLayout"
import Pokemon from "./Pokemon"

interface CardProps {
    name : string,
    health : Number,
    attack : Number,
    url : string,
}

function Card(props : CardProps){
    return(
        <>
            <CardLayout>
                <Pokemon sprite={props.url}/>
                <h1 className="text-xl font-bold">{props.name}</h1>
                <p className="text-lg">Base Stat : {String(props.health)}</p>
                <p className="text-lg">Attack : {String(props.attack)}</p>
            </CardLayout>
        </>
    )
}

export default Card