import React from "react"
import { useQuery, gql } from "@apollo/client"
import Pokemon from "./Pokemon"

const PokemonsContainer = () => {
    const POKEMONS_QUERY = gql`
        {
            pokemons(first: 9) {
                number,
                name
            }
        }
    `

    const { data, loading, error } = useQuery(POKEMONS_QUERY)

    if (loading) return "Loading..."
    if (error) return <pre>{error.message}</pre>

    const { pokemons } = data

    const pokemonElements = pokemons.map(pokemon => (
        <Pokemon key={pokemon.number} name={pokemon.name} />
    ))

    return (
        <div className="container">
            {pokemonElements}
        </div>
    )
}

export default PokemonsContainer