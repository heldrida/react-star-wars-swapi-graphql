export default {
  application: {
    name: "nsPunkbitStarWarsTopTrumps",
    defaultNumberOfPlayers: 2
  },
  // Obs: If you are not running the API through the Docker container documented
  // in the README.md, use the alternative proxy's provided
  graphqlEndpoint: process.env.NODE_ENV === 'development' ? "http://localhost:8080" : "https://swapi.apis.guru"
}