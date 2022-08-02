import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client"

class App extends React.Component {
  render() {
    const client = new ApolloClient({
      uri: "https://graphql-pokemon2.vercel.app/",
      cache: new InMemoryCache()
    })

    return (
      <ApolloProvider client={client}>
        <div>
          <h1>hello world</h1>
        </div>
      </ApolloProvider>
    )
  }
}

export default App