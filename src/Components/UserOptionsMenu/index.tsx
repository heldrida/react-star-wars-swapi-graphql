import React, { useEffect, useReducer } from 'react'
import { NumberOfPlayerSelect, PlayerModeSelect, PlayerNameSetter } from '../../Components'
import {
  TSelectOnChangeCallback,
  TInputOnChangeCallback
} from '../../Types'
import { ACTIONS, PLAYER_CARD_TYPE } from '../../Constants' 
import { useUserOptionsSetter } from '../../Context'
import { LightSaber, BarShort, StarIcon as Star, AngelFire } from '../../Icons'
import CtaButton from '../CtaButton'
import {
  ItemBlock,
  LightSaberContainer,
  AngelFireContainer, 
  CtaButtonContainer,
  Box,
  TitleBox
} from './styled'
import { reducer, initialState } from './reducer'
import Anime from './anime'

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
      <CtaButtonContainer>
        <CtaButton onClick={onCompleteHandler}>Let's play!</CtaButton>
      </CtaButtonContainer>
      {
        (state.playerMode === PLAYER_CARD_TYPE.people &&
        <Anime playerMode={state.playerMode} />)
      }
    </Box>
  )
}

export default UserOptionsMenu