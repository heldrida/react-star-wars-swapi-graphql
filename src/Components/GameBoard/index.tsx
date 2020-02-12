import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { IStateUserOptions } from '../../Types'
import { starWarsAPI } from '../../Queries'

const GameBoard = (props: IStateUserOptions) => {
  const { playerMode } = props
  const { data: queryResponseData } = useQuery(starWarsAPI[playerMode])

  useEffect(() => {
    console.log('[debug] queryResponseData: ', queryResponseData)
  }, [queryResponseData])

  return (
    <p>
      {'<GameBoard /> component!'}
    </p>
  )
}

export default GameBoard