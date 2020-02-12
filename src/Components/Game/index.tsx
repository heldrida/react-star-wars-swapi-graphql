import React, { useEffect } from 'react'
import GameBoard from '../GameBoard'
import { useUserOptionsState } from '../../Context'
import UserOptionsMenu from '../UserOptionsMenu'

const Game = () => {
  const userOptionsState = useUserOptionsState()
  useEffect(() => {
    console.log('[debug] Home: userOptionsState: ', userOptionsState)
  }, [userOptionsState])
  return (
    <>
      {
        ((!userOptionsState || !userOptionsState.play) &&
        <UserOptionsMenu />) ||
        <GameBoard />
      }
    </>
  )
}

export default Game