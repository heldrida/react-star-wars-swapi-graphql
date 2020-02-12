import React, { useEffect, useReducer, useCallback } from 'react'
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
import styled, { css, keyframes } from "styled-components"
import { boxShadowStyle, fontLabelStyle, fontTitlesStyle, lightTextShadow } from '../../sharedStyles'
import { useUserOptionsSetter } from '../../Context'
import { LightSaber, BarShort, Star } from '../../Icons'

const elementSpacing = css`
  padding-bottom: 1rem;
`

const ItemBlock = styled.div`
  ${elementSpacing};
`

const moveX = keyframes`
  from {
    transform: translateX(1rem);
  }
  to {
    transform: translateX(0rem);
  }
`;

const scale = keyframes`
  from {
    transform: scale(1) translateX(0);
  }
  to {
    transform: scale(0.8);
  }
`;

const Slide = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(-3rem);
    opacity: 0;
  }
`;

const SlideLong = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(-12rem);
    opacity: 0;
  }
`;


const moveForward = keyframes`
  0% {
    transform: translateX(0);
  }
  /* 20% {
    transform: translateX(0.5rem);
  } */
  100% {
    transform: translateX(0.44rem);
  }
`;



const LightSaberContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 5rem;
  width: 18rem;
  transform: translateY(-50%) translateX(-50%);

  & > svg:last-child {
    position: relative;
    z-index: 0;
    animation: ${moveForward} 1.2s ease-in-out alternate-reverse infinite;
  }

  & > svg:nth-child(1) {
    height: 1.42rem;
    position: absolute;
    z-index: 5;
    top: 0.83rem;
    left: 4rem;
    animation: ${moveX} 0.6s ease-in-out alternate infinite;
  }

  & > svg:nth-child(2) {
    height: 1.42rem;
    position: absolute;
    z-index: 5;
    top: 3.65rem;
    left: -1rem;
    animation: ${moveX} 0.6s ease-in-out alternate-reverse infinite;
  }

  & > svg:nth-child(3) {
    height: 1.42rem;
    position: absolute;
    z-index: 5;
    top: 6.48rem;
    left: 2rem;
    animation: ${moveX} 0.6s ease-in-out alternate infinite;
  }

  & > svg:nth-child(4) {
    position: absolute;
    height: 2.2rem;
    top: 8.48rem;
    left: 22rem;
    animation: ${scale} 0.4s ease-in-out alternate-reverse infinite, ${Slide} 2s infinite;
  }

  & > svg:nth-child(5) {
    height: 1.65rem;
    position: absolute;
    top: -4.52rem;
    left: -1rem;
    animation: ${scale} 0.4s ease-in-out alternate-reverse infinite, ${Slide} 4s infinite;
  }

  & > svg:nth-child(6) {
    height: 1.2rem;
    top: 12.48rem;
    left: 10rem;
    position: absolute;
    animation: ${scale} 1.2s ease-in-out alternate infinite, ${SlideLong} 8s infinite;
  }

  & > svg:nth-child(7) {
    height: 3rem;
    top: 19.48rem;
    left: 16rem;
    position: absolute;
    z-index: -1;
    animation: ${scale} 0.8s ease-in-out alternate-reverse infinite, ${SlideLong} 2s infinite;
  }
`

const StartButton = styled.button`
  background: ${(props: IPropsTheme) => props.theme.skyColor};
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 0 2rem;
  margin: 2rem 0;
  border: none;
  cursor: pointer;
  box-shadow: 2px 6px 22px ${(props: IPropsTheme) => props.theme.color2};
  transition: opacity 0.3s;
  
  ${fontTitlesStyle}
  ${lightTextShadow}

  &:hover {
    opacity: 0.92;
  }
`

const Box = styled.div`
  width: auto;
  height: auto;
  margin-top: 4rem;
  padding: 1rem 2rem 2rem;
  position: relative;
  background-image: linear-gradient(to left, ${(props: IPropsTheme) => props.theme.color1}, ${(props: IPropsTheme) => props.theme.color1}, ${(props: IPropsTheme) => props.theme.color1}, ${(props: IPropsTheme) => props.theme.color0});

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

const isPlayStart = (action: IAction): action is IAction => {
  return action.type === ACTIONS.setPlayStart
}

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

  const onComplete = useUserOptionsSetter()
  const onCompleteHandler = () => {
    dispatch({ type: ACTIONS.setPlayStart })
  }

  useEffect(() => {
    onComplete(state)
  }, [onComplete, state])

  return (
    <Box>
      <ItemBlock>
        <TitleBox>{'How many players?'}</TitleBox>
        <NumberOfPlayerSelect onChangeHandler={onNumberOfPlayersSelect} numberOfPlayers={state.numberOfPlayers} />
      </ItemBlock>
      <ItemBlock>
        <TitleBox>{'Type their names?'}</TitleBox>
        <PlayerNameSetter numberOfPlayers={state.numberOfPlayers} onChangeHandler={onPlayerNameInput} />
      </ItemBlock>
      <ItemBlock>
        <TitleBox>{'People or Starship cards?'}</TitleBox>
        <PlayerModeSelect onChangeHandler={onPlayerModeSelect} playerMode={state.playerMode} />
      </ItemBlock>
      <StartButton onClick={onCompleteHandler}>Let's play!</StartButton>
      <LightSaberContainer>
        <BarShort />
        <BarShort />
        <BarShort />
        <Star />
        <Star />
        <Star />
        <Star />
        <LightSaber />
      </LightSaberContainer>
    </Box>
  )
}

export default UserOptionsMenu