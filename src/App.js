import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import PokemonsContainer from "./components/PokemonsContainer"

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Pokedex</h1>
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  )
}

export default App