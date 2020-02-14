import React, { useState } from 'react'
import GameBoard from '../GameBoard'
import { useUserOptionsState } from '../../Context'
import UserOptionsMenu from '../UserOptionsMenu'
import { PoseGroup } from 'react-pose'
import { IStateUserOptions } from '../../Types'
import { AnimationContainer } from './anime'

const Game = () => {
  const userOptionsState: IStateUserOptions = useUserOptionsState()
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 400)

  return (
    <PoseGroup>
      {
        isVisible && (
          (
            (!userOptionsState || !userOptionsState.play) &&
            <AnimationContainer key="userOptionsMenu">
              <UserOptionsMenu />
            </AnimationContainer>
          ) ||
          <AnimationContainer key="gameBoard">
            <GameBoard {...userOptionsState} />
          </AnimationContainer>
        )
      }
    </PoseGroup>
  )
}

export default Game