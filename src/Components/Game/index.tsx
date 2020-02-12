import React, { useState } from 'react'
import GameBoard from '../GameBoard'
import { useUserOptionsState } from '../../Context'
import UserOptionsMenu from '../UserOptionsMenu'
import posed, { PoseGroup } from 'react-pose'
import { IStateUserOptions } from '../../Types'

const AnimationContainer = posed.div({
  enter: {
    transition: {
      y: { duration: 400, ease: 'easeInOut' }
    },
    y: 0,
    opacity: 1,
    delay: 320,
  },
  exit: {
    transition: { duration: 160 },
    opacity: 0.2,
    y: 40,
  }
})

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