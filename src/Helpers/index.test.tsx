import { playerNameFromListIndex } from './index'

it('should generate a player name', () => {
  const index = 5
  const expectedName = `Player6`
  const computedName = playerNameFromListIndex(index)
  expect(computedName).toBe(expectedName)
})