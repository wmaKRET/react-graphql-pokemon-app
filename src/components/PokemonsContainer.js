import React from "react"
import { useQuery, gql } from "@apollo/client"
import Pokemon from "./Pokemon"
import "./pokemons.css"

const PokemonsContainer = ({ activeFilter }) => {
    const POKEMONS_QUERY = gql`
        {
            pokemons(first: 151) {
                number,
                name,
                types,
                image
            }
        }
    `

    const { data, loading, error } = useQuery(POKEMONS_QUERY)

    if (loading) return "Loading..."
    if (error) return <pre>{error.message}</pre>

    const { pokemons } = data

    console.log(pokemons)

    const pokemonElements = pokemons
        .filter(pokemon => pokemon.types.includes(activeFilter === "All" ? pokemon.types[0] : activeFilter))
        .map(pokemon => (<Pokemon key={pokemon.number} pokemon={pokemon} activeFilter={activeFilter} />))

    return (
        <div className="container">
            {pokemonElements}
        </div>
    )
}

export default PokemonsContainer