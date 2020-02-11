enum PLAYER_CARD_TYPE {
  people = "people",
  starships = "starships"
}

enum ACTIONS {
  setNumberOfPlayers = 'ACTION_SET_NUMBER_OF_PLAYERS',
  setPlayerMode = 'ACTION_SET_PLAYER_MODE'
}

const PLAYER_MODE_OPTIONS = [
  PLAYER_CARD_TYPE.people,
  PLAYER_CARD_TYPE.starships
]

export {
  ACTIONS,
  PLAYER_CARD_TYPE,
  PLAYER_MODE_OPTIONS
}