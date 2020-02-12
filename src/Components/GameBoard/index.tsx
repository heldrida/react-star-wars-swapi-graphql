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
    const showFace = false
    const zIndex = 1
    console.log({
      translateXY,
      showFace,
      zIndex
    })
    return <GameCard translateXY={translateXY} showFace={showFace} zIndex={zIndex} />
  }

  useEffect(() => {
    console.log('[debug] queryResponseData: ', queryResponseData)
  }, [queryResponseData])

  const mock = [...Array(86)]

  return (
    <CardDeckContainer>
      {
        mock.map((value, index) => positionCardOnDeck(index))
      }
    </CardDeckContainer>
  )
}

export default GameBoard