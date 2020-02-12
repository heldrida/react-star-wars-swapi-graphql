import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { StarIcon } from '../../Icons'
import { IPropsTheme, TPropFlag, IPropsCard } from '../../Types'

const List = styled.ul`
  padding: 0;
  margin: 0;
`

const ListItem = styled.li<TPropFlag>`
  list-style: none;
  text-align: left;
  padding: 0.6rem 1rem;
  margin: 0;
  font-weight: ${(props: TPropFlag) => (props.light ? 100 : "bold")};
`

const StyledStarIcon = styled(StarIcon)`
  width: 20px;
  height: 20px;
  text-align: center;
`

const cardFace = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 4px solid ${(props: IPropsTheme) => props.theme.color1};
  border-radius: 1rem;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.14);
`

const Scene = styled.div<TPropFlag>`
  width: 8.5rem;
  height: 12rem;
  margin: 40px 0;
  perspective: 600px;
  position: absolute;
  z-index: ${(props: TPropFlag) => props.zIndex};
  transition: transform 0.6s ease-out;
  transform: ${(props: TPropFlag) => `translate(${props.translateXY}) rotate(${props.rotate}deg)`};
`

const SceneCard = styled.div<TPropFlag>`
  width: 100%;
  height: 100%;
  visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  cursor: pointer;
  position: relative;
  top: -3rem;
  right: -6rem;
  transition: transform 1s, top 1.6s, right 1.6s;
  transform: ${(props: TPropFlag) =>
    props.showFace ? `rotateY(180deg)` : `rotateY(0deg)`};

${props => {
    if (props.visible) {
      return `
        visibility: visible;
        top: 0;
        right: 0;
      `;
    }
  }}
`

const SceneCardFront = styled.div`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  background: ${(props: IPropsTheme) => props.theme.color0};
  font-family: "Nunito", sans-serif;

  ${cardFace}
`

const SceneCardBack = styled.div`
  font-size: 40px;
  background-color: ${(props: IPropsTheme) => props.theme.color1};
  transform: rotateY(180deg);
  background-color: white;
  background-image: radial-gradient(
      ${(props: IPropsTheme) => props.theme.color1} 6px,
      transparent 6px
    ),
    repeating-radial-gradient(
      ${(props: IPropsTheme) => props.theme.color6} 0,
      transparent 20px,
      ${(props: IPropsTheme) => props.theme.color6} 21px,
      ${(props: IPropsTheme) => props.theme.color1} 25px,
      transparent 26px
    );
  background-size: 30px 30px, 90px 90px;
  background-position: 0 0;

  ${cardFace}
`

const GameCard = (props: IPropsCard) => {
  const { translateXY, rotate, showFace, zIndex, visibilityDelay } = props  
  const [visible, setVisible] = useState(false)
  let t = setTimeout(() => {
    setVisible(true)
    clearTimeout(t)
  }, visibilityDelay)
  return (
    <Scene translateXY={translateXY} rotate={rotate} zIndex={zIndex}>
      <SceneCard showFace={showFace} visible={visible}>
        <SceneCardFront>
          <List>
            <ListItem>
              <StyledStarIcon />
            </ListItem>
            <ListItem>Mateo Asato</ListItem>
            <ListItem light="true">1.57m</ListItem>
          </List>
        </SceneCardFront>
        <SceneCardBack />
      </SceneCard>
  </Scene>
  )
}

export default GameCard
