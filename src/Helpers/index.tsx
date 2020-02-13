import { CARD_STANDARD_DECK_SIZE, PLAYER_CARD_TYPE } from '../Constants'
import { TDeckCard, TPlayerMode, IQueryResponseData } from '../Types'

const configurationCsvToArr = (csv: string): number[] => csv.split(',').map(v => +v)

const playerNameFromListIndex = (index: number): string => {
  const playerNamePrefix: string = 'Player'
  return `${playerNamePrefix}${index + 1}`
}

const getSizedChunkFromList = (fromPosition: number, desiredChunkSize: number, list: TDeckCard[]): TDeckCard[] => {
  let computedList: TDeckCard[] = []
  fromPosition -= 1; // offset
  const listSize = list.length
  if ((desiredChunkSize <= listSize) && (fromPosition > -1) && (fromPosition < listSize)) {
    for (let i = fromPosition, acc = 0; (i < listSize) && (acc < desiredChunkSize); i++, acc++) {
      computedList.push(list[i])
    }
    const reminder = desiredChunkSize - computedList.length
    for (let i = 0; i < reminder; i++) {
      computedList.push(list[i])
    }
  }
  return computedList
}

const getRandomStandardSizeCardDeckFromList = (list: TDeckCard[]) => {  
  const randomIndex = Math.floor(Math.random() * CARD_STANDARD_DECK_SIZE)
  return getSizedChunkFromList(randomIndex, CARD_STANDARD_DECK_SIZE, list)
}

const getCardDeck = (haystack: TDeckCard[]): TDeckCard[] => {
  const cardDeck = haystack &&
  ((haystack.length > CARD_STANDARD_DECK_SIZE &&
  getRandomStandardSizeCardDeckFromList(haystack)) || haystack)
  return cardDeck
}

const getPlayerModeListDataFromQueryResult = (playerMode: TPlayerMode, queryResponseData: IQueryResponseData): TDeckCard[] | undefined => {
  let list
  if (playerMode === PLAYER_CARD_TYPE.starships) {
    list = queryResponseData?.allStarships?.starships
  } else {
    list = queryResponseData?.allPeople?.people
  }
  return list
}

export {
  configurationCsvToArr,
  playerNameFromListIndex,
  getSizedChunkFromList,
  getRandomStandardSizeCardDeckFromList,
  getPlayerModeListDataFromQueryResult,
  getCardDeck
}