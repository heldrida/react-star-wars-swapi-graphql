import React, { useEffect, useState, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IStateUserOptions, TDeckCard, IPickCardIndexed, TPropFindWinner } from '../../Types'
import { starWarsAPI } from '../../Queries'
import GameCard from '../GameCard'
import styled from 'styled-components'
import { getPlayerModeListDataFromQueryResult,
         getCardDeck,
         getUniqueRandomIndexes,
         humanizeCardPlacementOnTableByFactor,
         getPlayerNameFromUserOptions,
         currentTimeFormatted } from '../../Helpers'
import CtaButton from '../CtaButton'
import config from '../../config'

const CardDeckContainer = styled.div`
  position: relative;
  height: 35rem;
`

const CtaContainer = styled.div`
  font-family: "Nunito", sans-serif;

  & > p {
    margin-right: 2rem;
    display: inline;
    color: rgba(0, 0, 0, 0.3);
  }
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
          const showFace = targetCardIndexes[targetIndex]?.showFace
          const playerName = targetCardIndexes[targetIndex]?.playerName
          const propsData = {
            ...child.props,
            translateXY,
            showFace,
            rotate,
            playerName
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

const resultsPropertyName = `${config.application.name}_result_history`
const useLocalStorage = (key: string, initialValue: [] = []) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]) 

  return [value, setValue]
}

const GameBoard = (props: IStateUserOptions) => {
  const [cardDeck, setCardDeck] = useState<TDeckCard[] | undefined>(undefined)  
  const [targetCardIndexes, setTargetCardIndexes] = useState<IPickCardIndexed[]>([])
  const [turnPickedCards, setTurnPickedCards] = useState<boolean>(true)
  const [result, setResult] = useLocalStorage(resultsPropertyName)
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

  const onClickHandler = useCallback(() => {
    setTurnPickedCards(true)
    const randomIndexes = cardDeck &&
                          getUniqueRandomIndexes(numberOfPlayers, cardDeck.length)
    console.log('[debug] randomIndexes: ', randomIndexes)
    console.log('[debug] cardDeck: ', cardDeck)
    const computedTargetCardIndexes: IPickCardIndexed[] | undefined = randomIndexes &&
                                                  randomIndexes.map((index, i) => {
                                                    return ({
                                                      index,
                                                      translateXY: `${i * 12}rem, 18rem`,
                                                      rotate: humanizeCardPlacementOnTableByFactor(index, 4.2),
                                                      showFace: true,
                                                      playerName: getPlayerNameFromUserOptions(`Player${i + 1}`, props),
                                                      card: cardDeck![index]
                                                    })
                                                  })
    console.log('[debug] computedTargetCardIndexes: ', computedTargetCardIndexes)
    computedTargetCardIndexes &&
    setTargetCardIndexes(computedTargetCardIndexes)

    let t = setTimeout(() => {
      setTurnPickedCards(false)
      clearTimeout(t)
    }, 1200)
  }, [setTargetCardIndexes, numberOfPlayers, cardDeck, props])

  useEffect(() => {
    const computedTargetCardIndexes: IPickCardIndexed[] | undefined = targetCardIndexes.map(data => {
                                                    return ({
                                                      ...data,
                                                      showFace: turnPickedCards
                                                    })
                                                  })
    computedTargetCardIndexes &&
    setTargetCardIndexes(computedTargetCardIndexes)

    targetCardIndexes &&
    cardDeck &&
    findWinner(targetCardIndexes)
  // Obs: we just want to watch turnPickedCards, ignore `targetCardIndexes`
  // eslint-disable-next-line
  }, [turnPickedCards])

  const gameResultHandler = useCallback((targetCard: TPropFindWinner) => {
    const prevData = (window.localStorage[resultsPropertyName] && JSON.parse(window.localStorage[resultsPropertyName])) || []
    const timeFormatted = currentTimeFormatted()
    const [date, time] = timeFormatted.split(',')
    const nextData = Object.assign({}, {
      playerName: targetCard?.playerName,
      date,
      time
    })
    const computedResult = [...prevData, nextData]
    setResult(computedResult)
  }, [setResult])

  const findWinner = useCallback((targetCardIndexes: TPropFindWinner[]) => {
    const winnerPlayerData = targetCardIndexes.reduce((prev, curr): TPropFindWinner => {
      let result
      if (prev && curr) {
        if ('height' in prev.card && 'height' in curr.card) {
          result = prev.card.height > curr.card.height ? prev : curr
        } else if ('length' in prev.card && 'length' in curr.card) {
          result = prev.card.length > curr.card.length ? prev : curr
        }
      }
      return result
    })
    console.log('[debug] winnerPlayerData: ', winnerPlayerData)
    winnerPlayerData &&
    gameResultHandler(winnerPlayerData)
  }, [gameResultHandler])

  return (
    <>
      <CardDeckContainer>
        <CardPicker targetCardIndexes={targetCardIndexes}>
          {
            cardDeck &&
            cardDeck.map((value, index) => positionCardOnDeck(index, value))
          }
        </CardPicker>
      </CardDeckContainer>
      <CtaContainer>
        <p>When ready to play, press the button!</p>
        <CtaButton onClick={onClickHandler}>Go!</CtaButton>
      </CtaContainer>
    </>
  )
}

export default GameBoard