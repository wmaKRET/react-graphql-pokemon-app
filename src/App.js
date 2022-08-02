import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Header from "./components/Header"
import PokemonsContainer from "./components/PokemonsContainer"
import "./app.css"

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Header />
      <div>
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  )
}

export default App