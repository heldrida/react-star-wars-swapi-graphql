import { playerNameFromListIndex, getSizedChunkFromList } from './index'

describe('playerNameFromListIndex', () => {
  it('should generate a player name', () => {
    const index = 5
    const expectedName = `Player6`
    const computedName = playerNameFromListIndex(index)
    expect(computedName).toBe(expectedName)
  })  
})

describe('getSizedChunkFromList', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8]
  it('should take a sized number of cards, regardless of initial index', () => {
    expect(getSizedChunkFromList(6, 8, list)).toEqual([7, 8, 1, 2, 3, 4, 5, 6])
    expect(getSizedChunkFromList(2, 8, list)).toEqual([3, 4, 5, 6, 7, 8, 1, 2])
    expect(getSizedChunkFromList(0, 8, list)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
  it('should not return values if the index to start from is greater then the list size', () => {
    expect(getSizedChunkFromList(9, 8, list)).toEqual([])
    expect(getSizedChunkFromList(1000, 8, list)).toEqual([])
    expect(getSizedChunkFromList(1, 12, list)).toEqual([])
    expect(getSizedChunkFromList(100, 1000, list)).toEqual([])
  })
})