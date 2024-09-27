import CardLayout from "./CardLayout"
import Pokemon from "./Pokemon"

interface CardProps {
    name? : string,
    health? : Number,
    attack? : Number,
    url? : string,
}

function Card(props : CardProps){
    return(
        <>
            <CardLayout>
                <Pokemon sprite={props.url}/>
                <h1 className="text-xl font-bold">{props.name}</h1>
                {props.health ? <p className="text-lg">Health : {String(props.health)}</p> : <p>Health : 0</p>}
                {props.attack ? <p className="text-lg">Attaack : {String(props.attack)}</p> : <p>Attack : 0</p>}
            </CardLayout>
        </>
    )
}

export default Card