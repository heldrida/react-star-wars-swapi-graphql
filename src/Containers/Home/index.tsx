import React, { useState, useEffect } from 'react'
import { NumberOfPlayerSelect } from '../../Components'
import AppConfiguration from '../../config'
import { TSelectOnChangeCallback } from '../../Types'

const UserOptionsMenu = () => {
  const initialUserInputOptionsState = {
    playerType: '',
    playerNames: {},
    numberOfPlayers: AppConfiguration.application.defaultNumberOfPlayers
  }
  const [userInputOptions, setUserInputOptions] = useState(initialUserInputOptionsState)
  const [numberOfPlayers, setNumberOfPlayers] = useState(AppConfiguration.application.defaultNumberOfPlayers)

  const onChangeHandlerNumberOfPlayerSelect: TSelectOnChangeCallback = (e) => {
    const { value } = e.target
    setNumberOfPlayers(+value)
    const data = Object.assign({
      ...userInputOptions,
      numberOfPlayers: +value
    })
    setUserInputOptions(data)
  }

  useEffect(() => {
    console.log('[debug] <UserOptionsMenu>: userInputOptions: ', userInputOptions)
  }, [userInputOptions])

  useEffect(() => {
    console.log('[debug] <UserOptionsMenu>: numberOfPlayers: ', numberOfPlayers)
  }, [numberOfPlayers])

  return (
    <NumberOfPlayerSelect onChangeHandler={onChangeHandlerNumberOfPlayerSelect} numberOfPlayers={numberOfPlayers} />
  )  
}

const Home = () => (
  <>
    <UserOptionsMenu />
  </>
)

export default Home