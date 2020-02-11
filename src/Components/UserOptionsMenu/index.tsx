import React, { useEffect, useReducer } from 'react'
import AppConfiguration from '../../config'
import { NumberOfPlayerSelect, PlayerModeSelect, PlayerNameSetter } from '../../Components'
import { TSelectOnChangeCallback, TInputOnChangeCallback } from '../../Types'
import { ACTIONS } from '../../Constants'
import {
  IStateUserOptions,
  IReducerUserOptions,
  IAction,
  ISetNumberOfPlayers,
  ISetPlayerMode,
  ISetPlayerName } from '../../Types'
  import { PLAYER_CARD_TYPE } from '../../Constants' 

// type guard
const isSetNumberOfPlayers = (action: IAction): action is ISetNumberOfPlayers => {
  return action.type === ACTIONS.setNumberOfPlayers
}

const isSetPlayerMode = (action: IAction): action is ISetPlayerMode => {
  return action.type === ACTIONS.setPlayerMode
}

const isSetPlayerName = (action: IAction): action is ISetPlayerName => {
  return action.type === ACTIONS.setPlayerName
}

const initialState: IStateUserOptions = {
  playerMode: PLAYER_CARD_TYPE.people,
  playerNames: {},
  numberOfPlayers: AppConfiguration.application.defaultNumberOfPlayers
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

  return state
}

const UserOptionsMenu: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onNumberOfPlayersSelect: TSelectOnChangeCallback = (e) => {
    const { value } = e.target
    dispatch({ type: ACTIONS.setNumberOfPlayers, numberOfPlayers: +value })
  }

  const onPlayerModeSelect: TSelectOnChangeCallback = (e) => {
    const { value } = e.target
    dispatch({ type: ACTIONS.setPlayerMode, playerMode: value })
  }

  const onPlayerNameInput: TInputOnChangeCallback = (e) => {
    const { name, value } = e.target
    dispatch({ type: ACTIONS.setPlayerName, playerSystemName: name, playerName: value })
  }

  useEffect(() => {
    console.log('[debug] <UserOptionsMenu>: state: ', state)
  }, [state])

  return (
    <>
      <NumberOfPlayerSelect onChangeHandler={onNumberOfPlayersSelect} numberOfPlayers={state.numberOfPlayers} />
      <PlayerModeSelect onChangeHandler={onPlayerModeSelect} playerMode={state.playerMode} />
      <PlayerNameSetter numberOfPlayers={state.numberOfPlayers} onChangeHandler={onPlayerNameInput} />
    </>
  )
}

export default UserOptionsMenu