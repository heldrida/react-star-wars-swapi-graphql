import { playerNameFromListIndex, getSizedChunkFromList, getPlayerModeListDataFromQueryResult } from './index'
import { TDeckCard } from '../Types'
import { PLAYER_CARD_TYPE } from '../Constants'

describe('playerNameFromListIndex', () => {
  it('should generate a player name', () => {
    const index = 5
    const expectedName = `Player6`
    const computedName = playerNameFromListIndex(index)
    expect(computedName).toBe(expectedName)
  })  
})

describe('getSizedChunkFromList', () => {
  const ana: TDeckCard = {
    id: 'x8kUUi!z~=',
    name: "Ana Louis",
    birthYear: "1976",
    gender: "female",
    height: 188,
    __typename: "person"
  }
  const michael: TDeckCard = {
    id: 'xsdX4+2!z==',
    name: "Michael Moore",
    birthYear: "1988",
    gender: "male",
    height: 185,
    __typename: "person"
  }
  const peter: TDeckCard = {
    id: 'x67z<!LLK2!z~=',
    name: "Peter Jackson",
    birthYear: "1980",
    gender: "male",
    height: 172,
    __typename: "person"
  }
  const robert: TDeckCard = {
    id: 'y99043lkzx!z~=',
    name: "Robert Mancini",
    birthYear: "1972",
    gender: "male",
    height: 178,
    __typename: "person"
  }
  const jessie: TDeckCard = {
    id: 'aBu6LLx!Zf=Z!=',
    name: "Jessie Schur",
    birthYear: "1979",
    gender: "female",
    height: 159,
    __typename: "person"
  }
  const george: TDeckCard = {
    id: 'tUx!kUopPx=',
    name: "George Borboun",
    birthYear: "1942",
    gender: "male",
    height: 162,
    __typename: "person"
  }
  const nick: TDeckCard = {
    id: 'ttJuxzOPP===',
    name: "Nick Rockstone",
    birthYear: "1988",
    gender: "male",
    height: 175,
    __typename: "person"
  }
  const elizabeth: TDeckCard = {
    id: 'ttJuxzOPP===',
    name: "Elizabeth Amelia",
    birthYear: "1998",
    gender: "female",
    height: 176,
    __typename: "person"
  }
  const list = [ana, michael, peter, robert, jessie, george, nick, elizabeth]
  it('should take a sized number of cards, regardless of initial index', () => {
    expect(getSizedChunkFromList(6, 8, list)).toEqual([nick, elizabeth, ana, michael, peter, robert, jessie, george])
    expect(getSizedChunkFromList(2, 8, list)).toEqual([peter, robert, jessie, george, nick, elizabeth, ana, michael])
    expect(getSizedChunkFromList(0, 8, list)).toEqual([ana, michael, peter, robert, jessie, george, nick, elizabeth])
  })
  it('should not return values if the index to start from is greater then the list size', () => {
    expect(getSizedChunkFromList(9, 8, list)).toEqual([])
    expect(getSizedChunkFromList(1000, 8, list)).toEqual([])
    expect(getSizedChunkFromList(1, 12, list)).toEqual([])
    expect(getSizedChunkFromList(100, 1000, list)).toEqual([])
  })
})

describe('should get the list data from the query response by the selected player mode', () => {
  const mock = [...Array(10)]
  const responseFactory = (name: string) => {
    return  {
      [`all${name[0].toUpperCase() + name.slice(1)}`]: {
        [name]: mock
      }
    }
  }
  const starshipsResponseData = responseFactory('starships')
  const peopleResponseData = responseFactory('people')
  const computedStarshipsList = getPlayerModeListDataFromQueryResult(PLAYER_CARD_TYPE.starships, starshipsResponseData)
  const computedPeopleList = getPlayerModeListDataFromQueryResult(PLAYER_CARD_TYPE.people, peopleResponseData)
  expect(computedStarshipsList).toEqual(mock)
  expect(computedPeopleList).toEqual(mock)
})