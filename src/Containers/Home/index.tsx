import React, { useEffect } from 'react'
import { UserOptionsMenu } from '../../Components'
import { GameProvider, useUserOptionsState } from '../../Context'

const GameBoard = () => <p>{'Component <GameBoard />'}</p>

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

const Home = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default Home