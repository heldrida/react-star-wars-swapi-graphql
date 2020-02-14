import { ACTIONS } from '../../Constants'
import {
  IAction,
  ISetNumberOfPlayers,
  ISetPlayerMode,
  ISetPlayerName } from '../../Types'

const isSetNumberOfPlayers = (action: IAction): action is ISetNumberOfPlayers => {
  return action.type === ACTIONS.setNumberOfPlayers
}

const isSetPlayerMode = (action: IAction): action is ISetPlayerMode => {
  return action.type === ACTIONS.setPlayerMode
}

const isSetPlayerName = (action: IAction): action is ISetPlayerName => {
  return action.type === ACTIONS.setPlayerName
}

const isPlayStart = (action: IAction): action is IAction => {
  return action.type === ACTIONS.setPlayStart
}

export {
  isSetNumberOfPlayers,
  isSetPlayerMode,
  isSetPlayerName,
  isPlayStart
}