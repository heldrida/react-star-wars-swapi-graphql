enum APPLICATION {
  name = "nsPunkbitStarWarsTopTrumps",
  defaultNumberOfPlayers = 2
}

enum PLAYER_CARD_TYPE {
  people = "people",
  starships = "starships"
}

// Obs: If you are not running the API through the Docker container documented
// in the README.md, use the alternative proxy's provided
const GRAPHQL_ENDPOINT = process.env.NODE_ENV === 'development' ? "http://localhost:8080" : "https://swapi.apis.guru"

export {
  APPLICATION,
  GRAPHQL_ENDPOINT,
  PLAYER_CARD_TYPE
}