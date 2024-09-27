import Base from '../../assets/pkmn_base.png'

interface PokemonSprite {
    sprite? : string,
}

const Pokemon = (props : PokemonSprite) => {
    return(
        <>
            <div className='relative flex justify-center'>
                {props.sprite && <img className="h-32 w-32 absolute" src={props.sprite} />}
                <img className="h-48 w-auto "src={Base}/>
            </div>
        </>
    )

}

export default Pokemon
