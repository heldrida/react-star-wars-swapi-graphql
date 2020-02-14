import React, { useEffect, useState, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IStateUserOptions, TDeckCard, IPickCardIndexed, TPropFindWinner } from '../../Types'
import { starWarsAPI } from '../../Queries'
import GameCard from '../GameCard'
import { getPlayerModeListDataFromQueryResult,
         getCardDeck,
         getUniqueRandomIndexes,
         humanizeCardPlacementOnTableByFactor,
         getPlayerNameFromUserOptions,
         currentTimeFormatted } from '../../Helpers'
import CtaButton from '../CtaButton'
import config from '../../config'
import { Chewbacca } from '../../Icons'
import { PoseGroup } from 'react-pose'
import {
  SpeechBubble,
  ChewbaccaContainer,
  CtaContainer,
  CardDeckContainer
} from './styled'
import { AnimationContainer } from './anime'
import CardPicker from './CardPicker'
import { useLocalStorage } from '../../CustomHooks'
import { getResultsPropertyName } from '../../Helpers'

const resultsPropertyName = getResultsPropertyName()

const GameBoard = (props: IStateUserOptions) => {
  const [cardDeck, setCardDeck] = useState<TDeckCard[] | undefined>(undefined)  
  const [targetCardIndexes, setTargetCardIndexes] = useState<IPickCardIndexed[]>([])
  const [turnPickedCards, setTurnPickedCards] = useState<boolean>(true)
  const [announceWinner, setAnnounceWinner] = useState<string | undefined>(undefined)
  const [result, setResult] = useLocalStorage(resultsPropertyName)
  const [winner, setWinner] = useState<IPickCardIndexed | undefined>(undefined)
  const { playerMode, numberOfPlayers } = props
  const { data: queryResponseData } = useQuery(starWarsAPI[playerMode])
  const [isCtaVisible, setIsCtaVisible] = useState(false)

  setTimeout(() => {
    setIsCtaVisible(true)
  }, 2000)

  const positionCardOnDeck = (index: number, cardDeck: TDeckCard, total: number) => {
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

  const onClickHandler = useCallback(() => {
    setIsCtaVisible(false)
    const randomIndexes = cardDeck &&
                          getUniqueRandomIndexes(numberOfPlayers, cardDeck.length)
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

    computedTargetCardIndexes &&
    setTargetCardIndexes(computedTargetCardIndexes)

    let t = setTimeout(() => {
      setTurnPickedCards(false)
      clearTimeout(t)
    }, 1200)
  }, [setTargetCardIndexes, numberOfPlayers, cardDeck, props])

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

    setWinner(winnerPlayerData)

    winnerPlayerData &&
    gameResultHandler(winnerPlayerData)
  }, [gameResultHandler])


  useEffect(() => {
    const haystack = getPlayerModeListDataFromQueryResult(playerMode, queryResponseData)
    const cardDeck = haystack &&
                     getCardDeck(haystack)
    cardDeck && setCardDeck(cardDeck)
  }, [queryResponseData, playerMode, setCardDeck])

  useEffect(() => {
    if (!winner) return
    setAnnounceWinner(winner?.playerName)
    setTimeout(() => {
      // reset
      setAnnounceWinner(undefined)
      setWinner(undefined)
      setTargetCardIndexes([])
      setTurnPickedCards(true)
      setIsCtaVisible(true)
    }, 3000)
  }, [winner, cardDeck])

  useEffect(() => {
    if (targetCardIndexes.length === 0) return
    const computedTargetCardIndexes: IPickCardIndexed[] | undefined = targetCardIndexes.map(data => {
                                                    return ({
                                                      ...data,
                                                      showFace: turnPickedCards
                                                    })
                                                  })
    computedTargetCardIndexes && setTargetCardIndexes(computedTargetCardIndexes)

    targetCardIndexes && findWinner(targetCardIndexes)
  // Obs: we just want to watch turnPickedCards, ignore `targetCardIndexes`
  // eslint-disable-next-line
  }, [turnPickedCards])

  return (
    <>
      <CardDeckContainer>
        <CardPicker targetCardIndexes={targetCardIndexes}>
          {
            cardDeck &&
            cardDeck.map((value, index) => positionCardOnDeck(index, value, cardDeck.length))
          }
        </CardPicker>
      </CardDeckContainer>
      <PoseGroup>
      {
        (
          announceWinner &&
          winner &&
          <AnimationContainer key="GoCtaButton">
            <ChewbaccaContainer>
              <SpeechBubble>
                <span>Waaargh! {announceWinner} is the winner!</span>
              </SpeechBubble>
              <Chewbacca />
            </ChewbaccaContainer>
          </AnimationContainer>
        ) ||
        (
          isCtaVisible && (
            <AnimationContainer key="GoCtaButton">
              <CtaContainer>
                <p>When ready to play, press the button!</p>
                <CtaButton onClick={onClickHandler}>Go!</CtaButton>
              </CtaContainer>
            </AnimationContainer>
          )
        )
      }
      </PoseGroup>
    </>
  )
}

export default GameBoard