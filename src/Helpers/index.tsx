const configurationCsvToArr = (csv: string): number[] => csv.split(',').map(v => +v)

const playerNameFromListIndex = (index: number): string => {
  const playerNamePrefix: string = 'Player'
  return `${playerNamePrefix}${index + 1}`
}

const getSizedChunkFromList = (fromIndex: number, desiredChunkSize: number, list: number[]): number[] => {
  let computedList = []
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

export {
  configurationCsvToArr,
  playerNameFromListIndex,
  getSizedChunkFromList
}