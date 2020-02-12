import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IStateUserOptions } from '../../Types'
import { starWarsAPI } from '../../Queries'
import GameCard from '../GameCard'
import styled from 'styled-components'

const CardDeckContainer = styled.div`
  position: relative;
`

const GameBoard = (props: IStateUserOptions) => {
  const { playerMode } = props
  const { data: queryResponseData } = useQuery(starWarsAPI[playerMode])

  const positionCardOnDeck = (index: number) => {
    const posX: string = (index + 2) + 'px';
    const posY: string = (index + 2) + 'px';
    const translateXY = `${posX}, ${posY}`
    const showFace = true
    const zIndex = 1
    const rotate = Math.random() * 0.8 // humanize right :)
    const visibilityDelay = index * 60
    return <GameCard translateXY={translateXY} rotate={rotate} showFace={showFace} visibilityDelay={visibilityDelay} zIndex={zIndex} />
  }

  useEffect(() => {
    console.log('[debug] queryResponseData: ', queryResponseData)
  }, [queryResponseData])

  const mock = [...Array(52)]

  return (
    <CardDeckContainer>
      {
        mock.map((value, index) => positionCardOnDeck(index))
      }
    </CardDeckContainer>
  )
}

export default GameBoard