import React, { useEffect, useReducer } from 'react'
import AppConfiguration from '../../config'
import { NumberOfPlayerSelect } from '../../Components'
import { TSelectOnChangeCallback } from '../../Types'
import { ACTIONS } from '../../Constants'
import { IStateUserOptions, IReducerUserOptions, IAction, ISetNumberOfPlayers } from '../../Types'

// type guard
const isSetNumberOfPlayers = (action: IAction): action is ISetNumberOfPlayers => {
  return action.type === ACTIONS.setNumberOfPlayers
}

const initialState: IStateUserOptions = {
  playerType: '',
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
  return state
}

const UserOptionsMenu: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onNumberOfPlayersSelect: TSelectOnChangeCallback = (e) => {
    const { value } = e.target
    dispatch({ type: ACTIONS.setNumberOfPlayers, numberOfPlayers: +value })
  }

  useEffect(() => {
    console.log('[debug] <UserOptionsMenu>: state: ', state)
  }, [state])

  return (
    <NumberOfPlayerSelect onChangeHandler={onNumberOfPlayersSelect} numberOfPlayers={state.numberOfPlayers} />
  )  
}

export default UserOptionsMenu