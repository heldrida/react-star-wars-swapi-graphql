import AppConfiguration from '../../config'
import { PLAYER_CARD_TYPE } from '../../Constants' 
import {
  isSetNumberOfPlayers,
  isSetPlayerMode,
  isSetPlayerName,
  isPlayStart
} from './typeGuards'
import {
  IStateUserOptions,
  IReducerUserOptions,
  IAction } from '../../Types'

const initialState: IStateUserOptions = {
  playerMode: PLAYER_CARD_TYPE.people,
  playerNames: {},
  numberOfPlayers: AppConfiguration.application.defaultNumberOfPlayers,
  play: false
}

const reducer: IReducerUserOptions = (state: IStateUserOptions, action: IAction): IStateUserOptions => {
  if (isSetNumberOfPlayers(action)) {
    const { numberOfPlayers } = action
    return {
      ...state,
      numberOfPlayers
    }
  }

  if (isSetPlayerMode(action)) {
    const { playerMode } = action
    return {
      ...state,
      playerMode
    }
  }

  if (isSetPlayerName(action)) {
    const {  playerSystemName, playerName } = action
    return {
      ...state,
      playerNames: {
        ...state.playerNames,
        [playerSystemName]: playerName
      }
    }
  }

  if (isPlayStart(action)) {
    return {
      ...state,
      play: true
    }
  }

  return state
}

export {
  initialState,
  reducer
}