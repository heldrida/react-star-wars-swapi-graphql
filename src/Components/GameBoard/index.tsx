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
import { Chewbacca } from '../../Icons'
import posed, { PoseGroup } from 'react-pose'

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

const ChewbaccaContainer = styled.div`
  position: relative;
  text-align: right;

  & > svg {
    width: 150px;
  }
`

const SpeechBubble = styled.div`
  font-size: 3rem;
  position: relative;
  display: inline-block;
  padding: 1.5rem;
  background: #00cc99;
  color: #f6f6f6;
  animation: bounce-in 1s 1;
  transform-origin: left bottom;
  position: absolute;
  top: -4rem;
  right: 8rem;
  z-index: 30;
  font-weight: bold;

  > span {
    font-size: 1.5rem;
    font-family: "Nunito", sans-serif;
  }

  &:after {
    content: '';
    top: 88%;
    right: 0;
    position: absolute;
    border: 1.5rem solid;
    border-color: #00cc99 #00cc99 transparent transparent;
  }
`

const AnimationContainer = posed.div({
  enter: {
    transition: {
      y: { duration: 400, ease: 'easeInOut' }
    },
    y: 0,
    opacity: 1,
    delay: 320,
  },
  exit: {
    transition: { duration: 160 },
    opacity: 0.2,
    y: 40,
  }
})

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

  useEffect(() => {
    const haystack = getPlayerModeListDataFromQueryResult(playerMode, queryResponseData)
    const cardDeck = haystack &&
                     getCardDeck(haystack)
    cardDeck && setCardDeck(cardDeck)
  }, [queryResponseData, playerMode, setCardDeck])

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

  useEffect(() => {
    if (targetCardIndexes.length === 0) return
    const computedTargetCardIndexes: IPickCardIndexed[] | undefined = targetCardIndexes.map(data => {
                                                    return ({
                                                      ...data,
                                                      showFace: turnPickedCards
                                                    })
                                                  })
    computedTargetCardIndexes &&
    setTargetCardIndexes(computedTargetCardIndexes)

    targetCardIndexes &&
    targetCardIndexes.length > 0 &&
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
    setWinner(winnerPlayerData)

    winnerPlayerData &&
    gameResultHandler(winnerPlayerData)
  }, [gameResultHandler])

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