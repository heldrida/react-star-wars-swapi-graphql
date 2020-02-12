import React from 'react'
import { Game } from '../../Components'
import { GameProvider } from '../../Context'

const Home = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default Home