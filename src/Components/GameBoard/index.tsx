import React, { useEffect, useState, useRef } from 'react'
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

interface IPickCardIndexed {
  index: number,
  translateXY: string
}

const CardPicker = ({ children, targetCardIndexes }: { children?: any, targetCardIndexes: IPickCardIndexed[] }) => {
  return (
    <>
      {
        React.Children.map(children || null, (child, index) => {
          const targetIndex = (targetCardIndexes &&
                              targetCardIndexes.findIndex(pickData => pickData.index === index))
          const translateXY = targetCardIndexes &&
                              targetCardIndexes[targetIndex]?.translateXY
          const propsData = {
            ...child.props,
            translateXY,
            showFace: false
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
  const { playerMode } = props
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
    console.log('[debug] cardDeck: ', cardDeck)
    cardDeck && setCardDeck(cardDeck)
  }, [queryResponseData, playerMode, setCardDeck])

  const onClickHandler = React.useCallback(() => {
    const posX: string = 20 + 'rem';
    const posY: string = 20 + 'rem';
    const translateXY = `${posX}, ${posY}`
    const targetCardIndexes: IPickCardIndexed[] = [{
      index: 12,
      translateXY: "12rem, 18rem"
    }, {
      index: 10,
      translateXY: "22rem, 18rem"
    }, {
      index: 36,
      translateXY: "32rem, 18rem"
    }]
    setTargetCardIndexes(targetCardIndexes)
  }, [setTargetCardIndexes])

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