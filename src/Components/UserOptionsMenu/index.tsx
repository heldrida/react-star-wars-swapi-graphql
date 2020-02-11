import React, { useEffect, useReducer } from 'react'
import AppConfiguration from '../../config'
import { NumberOfPlayerSelect, PlayerModeSelect } from '../../Components'
import { TSelectOnChangeCallback } from '../../Types'
import { ACTIONS } from '../../Constants'
import {
  IStateUserOptions,
  IReducerUserOptions,
  IAction,
  ISetNumberOfPlayers,
  ISetPlayerMode } from '../../Types'
  import { PLAYER_CARD_TYPE } from '../../Constants' 

// type guard
const isSetNumberOfPlayers = (action: IAction): action is ISetNumberOfPlayers => {
  return action.type === ACTIONS.setNumberOfPlayers
}

const isSetPlayerMode = (action: IAction): action is ISetPlayerMode => {
  return action.type === ACTIONS.setPlayerMode
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

  useEffect(() => {
    console.log('[debug] <UserOptionsMenu>: state: ', state)
  }, [state])

  return (
    <>
      <NumberOfPlayerSelect onChangeHandler={onNumberOfPlayersSelect} numberOfPlayers={state.numberOfPlayers} />
      <PlayerModeSelect onChangeHandler={onPlayerModeSelect} playerMode={state.playerMode} />
    </>
  )
}

export default UserOptionsMenu