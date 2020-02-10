import React, { useState, useEffect } from 'react'
import AppConfiguration from '../../config'
import { NumberOfPlayerSelect } from '../../Components'
import { TSelectOnChangeCallback } from '../../Types'

const UserOptionsMenu: React.FC = () => {
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

export default UserOptionsMenu