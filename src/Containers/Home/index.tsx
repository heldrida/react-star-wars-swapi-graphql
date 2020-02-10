import React, { useState } from 'react'
import { NumberOfPlayerSelect } from '../../Components'
import AppConfiguration from '../../config'
import { TSelectOnChangeCallback } from '../../Types'

const Home = () => {
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

  return (
    <NumberOfPlayerSelect onChangeHandler={onChangeHandlerNumberOfPlayerSelect} numberOfPlayers={numberOfPlayers} />
  )
}

export default Home