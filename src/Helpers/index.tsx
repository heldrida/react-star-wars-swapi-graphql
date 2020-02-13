import { CARD_STANDARD_DECK_SIZE } from '../Constants'
import { TDeckCard } from '../Types'

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

export {
  configurationCsvToArr,
  playerNameFromListIndex,
  getSizedChunkFromList,
  getRandomStandardSizeCardDeckFromList
}