import React from 'react'
import { LightSaber, BarShort, StarIcon as Star, AngelFire } from '../../Icons'
import {
  LightSaberContainer,
  AngelFireContainer
} from './styled'
import { PLAYER_CARD_TYPE } from '../../Constants' 

const Anime = ({playerMode}: {playerMode: string}) => {
  return (
    (playerMode === PLAYER_CARD_TYPE.people &&
      <LightSaberContainer>
        <BarShort />
        <BarShort />
        <BarShort />
        <Star />
        <Star />
        <Star />
        <Star />
        <LightSaber />
      </LightSaberContainer>) ||
      <AngelFireContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <AngelFire />
      </AngelFireContainer>
    )
}

export default Anime