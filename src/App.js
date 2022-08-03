import { useState } from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Header from "./components/header/Header"
import PokemonsContainer from "./components/PokemonsContainer"
import "./app.css"

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache()
  })

  const changeFilter = (filter) => setActiveFilter(filter)

  console.log(activeFilter)

  const pokemonTypes = [ "All", "Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"]

  return (
    <ApolloProvider client={client}>
      <Header pokemonTypes={pokemonTypes} changeFilter={changeFilter}/>
      <div>
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  )
}

export default App