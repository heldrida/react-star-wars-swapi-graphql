
const themeColors = {
  default: {
    schaussPink: "#FF93B9",
    cottonCandy: "#FFB8D1",
    pinkPearl: "#E4B4C2",
    queenPink: "#E7CEE3",
    platinum: "#E0E1E9",
    lightCyan: "#DDFDFE",
    lightBlue: "#6551FF",
    darkGrey: "#222",
    lightGrey: "#fff"
  },
  alternative: {
    schaussPink: "#FF96BB",
    cottonCandy: "#FFB8D1",
    pinkPearl: "#E4B4C2",
    queenPink: "#E7CEE3",
    platinum: "#E0E1E9",
    lightCyan: "#DDFDFE",
    lightBlue: "#6551FF",
    darkGrey: "#333",
    lightGrey: "#fff"
  }
}

export default {
  application: {
    name: "nsPunkbitStarWarsTopTrumps",
    defaultNumberOfPlayers: 2
  },
  // Obs: If you are not running the API through the Docker container documented
  // in the README.md, use the alternative proxy's provided
  graphqlEndpoint: process.env.NODE_ENV === 'development' ? "http://localhost:8080" : "https://swapi.apis.guru",
  themeColors,
  // Select number of players optional values, set as comma separated values
  selectableNumberOfPlayersCsv: "2, 3, 4, 5, 6"
}