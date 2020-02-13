import { CARD_STANDARD_DECK_SIZE, PLAYER_MODE_OPTIONS, PLAYER_CARD_TYPE } from '../Constants'
import { TDeckCard, TPlayerMode } from '../Types'

const configurationCsvToArr = (csv: string): number[] => csv.split(',').map(v => +v)

const playerNameFromListIndex = (index: number): string => {
  const playerNamePrefix: string = 'Player'
  return `${playerNamePrefix}${index + 1}`
}

const getSizedChunkFromList = (fromIndex: number, desiredChunkSize: number, list: TDeckCard[]): TDeckCard[] => {
  let computedList: TDeckCard[] = []
  const listSize = list.length
  const diff = listSize - fromIndex
  if ((desiredChunkSize >= fromIndex) && listSize >= desiredChunkSize) {
    for (let i = fromIndex; i < listSize; i++) {
      computedList.push(list[i])
    }
    for (let i = 0; i < (desiredChunkSize - diff); i++) {
      computedList.push(list[i])
    }
  }
  return computedList
}

const getRandomStandardSizeCardDeckFromList = (list: TDeckCard[]) => {
  const randomIndex = Math.random() * CARD_STANDARD_DECK_SIZE
  getSizedChunkFromList(randomIndex, CARD_STANDARD_DECK_SIZE, list)
}

const getPlayerModeListDataFromQueryResult = (playerMode: TPlayerMode, queryResponseData: any) => {
  let list
  if (playerMode === PLAYER_CARD_TYPE.people) {
    list = queryResponseData?.allPeople?.people
  } else if (playerMode === PLAYER_CARD_TYPE.starships) {
    list = queryResponseData?.allStarships?.starships
  }
  return list
}

export {
  configurationCsvToArr,
  playerNameFromListIndex,
  getSizedChunkFromList,
  getRandomStandardSizeCardDeckFromList,
  getPlayerModeListDataFromQueryResult
}