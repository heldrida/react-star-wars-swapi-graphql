import { CARD_STANDARD_DECK_SIZE, PLAYER_CARD_TYPE } from '../Constants'
import { TDeckCard, TPlayerMode, IQueryResponseData, IStateUserOptions } from '../Types'

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

const convertCmToMeters = (value: string | number): number => {
  const computedValue: number = (!isNaN(+value) && Number(value) / 100) || 0
  return +computedValue.toFixed(2)
}

const getUniqueRandomIndexes = (fullfil: number, length: number, acc: number[] = []): number[] => {
  const randomNumber: number = Math.floor(Math.random() * length)
  if ( acc.includes(randomNumber) || randomNumber === 0) {
    return getUniqueRandomIndexes(fullfil, length, acc)
  } else if (randomNumber !== 0 && fullfil > 0) {
    fullfil -= 1
    acc.push(randomNumber)
    return getUniqueRandomIndexes(fullfil, length, acc)
  }
  return acc
}

const isOdd = (num: number) => (num % 2) !== 0

const humanizeCardPlacementOnTableByFactor = (index: number, factor: number): number => (isOdd(index) ? 1 : -1) * (Math.random() * factor)

const getPlayerNameFromUserOptions = (playerLabel: string, userOptions: IStateUserOptions): string => {
  let computedName
  if (userOptions.playerNames.hasOwnProperty(playerLabel)) {
    computedName = `${userOptions.playerNames[playerLabel]}`
  } else {
    computedName = playerLabel
  }
  return computedName
}

export {
  configurationCsvToArr,
  playerNameFromListIndex,
  getSizedChunkFromList,
  getRandomStandardSizeCardDeckFromList,
  getPlayerModeListDataFromQueryResult,
  getCardDeck,
  convertCmToMeters,
  getUniqueRandomIndexes,
  humanizeCardPlacementOnTableByFactor,
  getPlayerNameFromUserOptions
}