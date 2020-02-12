import { gql } from 'apollo-boost'
import { PLAYER_CARD_TYPE } from '../Constants'
import { IQueries } from '../Types'

const QUERY_PEOPLE = gql`
query getPeople($after: String) {
  allPeople(after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    people {
      id
      name
      birthYear
      gender
      height
    }
  }
}
`

const QUERY_STARSHIPS = gql`
query getStarships($after: String) {
  allStarships(after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    starships {
    	id
      name
      model
      length
      passengers
    }
  }
}
`

const QUERIES: IQueries = {
  [PLAYER_CARD_TYPE.people]: QUERY_PEOPLE,
  [PLAYER_CARD_TYPE.starships]: QUERY_STARSHIPS
}

export default QUERIES