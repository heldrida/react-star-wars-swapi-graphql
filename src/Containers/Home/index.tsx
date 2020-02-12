import React from 'react'
import { UserOptionsMenu } from '../../Components'
import { GameProvider } from '../../Context'

const Home = () => (
  <GameProvider>
    <UserOptionsMenu />
  </GameProvider>
)

export default Home