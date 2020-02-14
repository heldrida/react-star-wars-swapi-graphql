import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IStateUserOptions, TDeckCard, IPickCardIndexed } from '../../Types'
import { starWarsAPI } from '../../Queries'
import GameCard from '../GameCard'
import styled from 'styled-components'
import { getPlayerModeListDataFromQueryResult,
         getCardDeck,
         getUniqueRandomIndexes,
         humanizeCardPlacementOnTableByFactor } from '../../Helpers'

const CardDeckContainer = styled.div`
  position: relative;
`

const CardPicker = ({ children, targetCardIndexes }: { children?: any, targetCardIndexes: IPickCardIndexed[] }) => {
  return (
    <>
      {
        React.Children.map(children || null, (child, index) => {
          const targetIndex = (targetCardIndexes &&
                              targetCardIndexes.findIndex(pickData => pickData.index === index))
          const translateXY = targetCardIndexes[targetIndex]?.translateXY
          const rotate = targetCardIndexes[targetIndex]?.rotate
          const propsData = {
            ...child.props,
            translateXY,
            showFace: false,
            rotate
          }
          if (targetIndex === -1) {
            return <child.type {...child.props} key={index} />
          } else {
            return <child.type
                    key={index}
                    {
                      ...propsData
                    }
                   />
          }
        })
      }
    </>
  )
}

const GameBoard = (props: IStateUserOptions) => {
  const [cardDeck, setCardDeck] = useState<TDeckCard[] | undefined>(undefined)  
  const [targetCardIndexes, setTargetCardIndexes] = useState<IPickCardIndexed[]>([])
  const { playerMode, numberOfPlayers } = props
  const { data: queryResponseData } = useQuery(starWarsAPI[playerMode])

  const positionCardOnDeck = (index: number, cardDeck: TDeckCard) => {
    const posX: string = (index + 2) + 'px';
    const posY: string = (index + 2) + 'px';
    let translateXY = `${posX}, ${posY}`
    let showFace = true
    const zIndex = 1
    const rotate = Math.random() * 0.8 // humanize it, right? :)
    const visibilityDelay = index * 60

    return <GameCard key={index}
                     metadata={cardDeck}
                     translateXY={translateXY}
                     rotate={rotate}
                     showFace={showFace}
                     visibilityDelay={visibilityDelay}
                     zIndex={zIndex} />
  }

  useEffect(() => {
    const haystack = getPlayerModeListDataFromQueryResult(playerMode, queryResponseData)
    const cardDeck = haystack &&
                     getCardDeck(haystack)
    cardDeck && setCardDeck(cardDeck)
  }, [queryResponseData, playerMode, setCardDeck])

  const onClickHandler = React.useCallback(() => {
    const randomIndexes = cardDeck &&
                          getUniqueRandomIndexes(numberOfPlayers, cardDeck.length)
    const targetCardIndexes: IPickCardIndexed[] | undefined = randomIndexes &&
                                                  randomIndexes.map((index, i) => {
                                                    return ({
                                                      index,
                                                      translateXY: `${i * 12}rem, 20rem`,
                                                      rotate: humanizeCardPlacementOnTableByFactor(index, 4.2)
                                                    })
                                                  })
    targetCardIndexes &&
    setTargetCardIndexes(targetCardIndexes)
  }, [setTargetCardIndexes, numberOfPlayers, cardDeck])

  return (
    <CardDeckContainer>
      <CardPicker targetCardIndexes={targetCardIndexes}>
        {
          cardDeck &&
          cardDeck.map((value, index) => positionCardOnDeck(index, value))
        }
      </CardPicker>
      <button onClick={onClickHandler}>Pick random cards!</button>
    </CardDeckContainer>
  )
}

export default GameBoard