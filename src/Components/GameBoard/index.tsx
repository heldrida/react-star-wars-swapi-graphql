import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IStateUserOptions, TDeckCard } from '../../Types'
import { starWarsAPI } from '../../Queries'
import GameCard from '../GameCard'
import styled from 'styled-components'
import { getPlayerModeListDataFromQueryResult,
         getCardDeck } from '../../Helpers'

const CardDeckContainer = styled.div`
  position: relative;
`

const GameBoard = (props: IStateUserOptions) => {
  const [cardDeck, setCardDeck] = useState<TDeckCard[] | undefined>(undefined)  
  const { playerMode } = props
  const { data: queryResponseData } = useQuery(starWarsAPI[playerMode])

  const positionCardOnDeck = (index: number) => {
    const posX: string = (index + 2) + 'px';
    const posY: string = (index + 2) + 'px';
    const translateXY = `${posX}, ${posY}`
    const showFace = true
    const zIndex = 1
    const rotate = Math.random() * 0.8 // humanize it, right? :)
    const visibilityDelay = index * 60
    return <GameCard key={index} translateXY={translateXY} rotate={rotate} showFace={showFace} visibilityDelay={visibilityDelay} zIndex={zIndex} />
  }

  useEffect(() => {
    const haystack = getPlayerModeListDataFromQueryResult(playerMode, queryResponseData)
    const cardDeck = haystack &&
                     getCardDeck(haystack)
    cardDeck && setCardDeck(cardDeck)
  }, [queryResponseData, playerMode, setCardDeck])

  return (
    <CardDeckContainer>
      {
        cardDeck &&
        cardDeck.map((value, index) => positionCardOnDeck(index))
      }
    </CardDeckContainer>
  )
}

export default GameBoard