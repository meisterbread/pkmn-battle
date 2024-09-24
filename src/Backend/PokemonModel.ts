export interface PokemonModel {
    name: string,
    sprites: {
        front_default : string
    },
    
    stats: {
        base_stat : Number,
        stat : {
            name : string
        }

    } [];
}