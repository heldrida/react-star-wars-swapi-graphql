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
  ISetPlayerName,
  IPropsTheme } from '../../Types'
  import { PLAYER_CARD_TYPE } from '../../Constants' 
import styled, { css } from "styled-components"
import { boxShadowStyle, fontLabelStyle } from '../../sharedStyles'

const elementSpacing = css`
  padding-bottom: 1rem;
`

const ItemBlock = styled.div`
  ${elementSpacing}
`

const Box = styled.div`
  width: auto;
  height: auto;
  background: ${(props: IPropsTheme) => props.theme.color1};
  margin-top: 4rem;
  padding: 1rem 2rem 4rem;
  border-radius: 10px;

  ${boxShadowStyle}
`

const TitleBox = styled.p`
  line-height: 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(props: IPropsTheme) => props.theme.textDark};

  ${fontLabelStyle}
`

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
    <Box>
      <ItemBlock>
        <TitleBox>{'How many players?'}</TitleBox>
        <NumberOfPlayerSelect onChangeHandler={onNumberOfPlayersSelect} numberOfPlayers={state.numberOfPlayers} />
      </ItemBlock>
      <ItemBlock>
        <TitleBox>{'Name your players?'}</TitleBox>
        <PlayerNameSetter numberOfPlayers={state.numberOfPlayers} onChangeHandler={onPlayerNameInput} />
      </ItemBlock>
      <ItemBlock>
        <TitleBox>{'People or Starship cards?'}</TitleBox>
        <PlayerModeSelect onChangeHandler={onPlayerModeSelect} playerMode={state.playerMode} />
      </ItemBlock>
    </Box>
  )
}

export default UserOptionsMenu