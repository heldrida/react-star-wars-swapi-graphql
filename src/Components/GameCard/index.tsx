import React, { useState } from 'react'
import { IPropsCard, IPerson, IStarships } from '../../Types'
import { convertCmToMeters } from '../../Helpers'
import {
  List,
  ListItem,
  StyledStarIcon,
  Scene,
  SceneCard,
  SceneCardFront,
  SceneCardBack,
  PlayerNameBadge
} from './styled'

const PersonMetadata = ({name, height, gender}: IPerson) => (
  <>
    <ListItem light="true">{name}</ListItem>
    <ListItem light="true">{`${convertCmToMeters(height)}cm`}</ListItem>
    <ListItem light="true">{gender}</ListItem>
  </>
)

const StarShipMetadata = ({name, length, model}: IStarships) => (
  <>
    <ListItem light="true">{name}</ListItem>
    <ListItem light="true">{length}</ListItem>
    <ListItem light="true">{model}</ListItem>
  </>
)

const GameCard = (props: IPropsCard) => {
  const { translateXY, rotate, showFace, zIndex, visibilityDelay, metadata, playerName = { playerName: '' } } = props  
  const [visible, setVisible] = useState(false)
  let t = setTimeout(() => {
    setVisible(true)
    clearTimeout(t)
  }, visibilityDelay)
  return (
    <Scene translateXY={translateXY} rotate={rotate} zIndex={zIndex} playerName={playerName}>
      <SceneCard showFace={showFace} visible={visible}>
        <SceneCardFront>
          <List>
            <ListItem>
              <StyledStarIcon />
            </ListItem>
            {
              ('model' in metadata &&
              <StarShipMetadata {...metadata} />) ||
              ('height' in metadata &&
              <PersonMetadata {...metadata} />)
            }
          </List>
        </SceneCardFront>
        <SceneCardBack />
      </SceneCard>
      {
        typeof playerName === 'string' &&
        <PlayerNameBadge>{playerName}</PlayerNameBadge>
      }
  </Scene>
  )
}

export default GameCard
