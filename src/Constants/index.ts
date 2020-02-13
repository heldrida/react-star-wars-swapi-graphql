enum PLAYER_CARD_TYPE {
  people = "people",
  starships = "starships"
}

enum ACTIONS {
  setNumberOfPlayers = 'ACTION_SET_NUMBER_OF_PLAYERS',
  setPlayerMode = 'ACTION_SET_PLAYER_MODE',
  setPlayerName = 'ACTION_SET_PLAYER_NAME',
  setPlayStart = 'ACTION_SET_PLAY_START'
}

const PLAYER_MODE_OPTIONS = [
  PLAYER_CARD_TYPE.people,
  PLAYER_CARD_TYPE.starships
]

const CARD_STANDARD_DECK_SIZE = 52

export {
  ACTIONS,
  PLAYER_CARD_TYPE,
  PLAYER_MODE_OPTIONS,
  CARD_STANDARD_DECK_SIZE
}