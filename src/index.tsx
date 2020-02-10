import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:8080"
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)