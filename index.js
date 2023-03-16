import { request } from 'graphql-request'


let endpoint = 'https://countries.trevorblades.com/'

let query = `query {
  continents {
    name
  }
  
}`

// Run GraphQL queries/mutations using a static function
request(endpoint, query).then((data) => console.log(data))

// ... or create a GraphQL client instance to send requests
// const client = new GraphQLClient(endpoint, { headers: {} })
// client.request(query, variables).then((data) => console.log(data))