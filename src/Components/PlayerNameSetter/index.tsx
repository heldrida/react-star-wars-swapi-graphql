import React from 'react'
import { IPropsPlayerNameSetter } from '../../Types'
import { playerNameFromListIndex } from '../../Helpers'
import { InputBox, LabelBox } from './styled'

const PlayerNameSetter = ({onChangeHandler, numberOfPlayers}: IPropsPlayerNameSetter) => {

  return (
    <ul>
    {
      [...Array(numberOfPlayers)].map((val, index) => {
        const systemName = playerNameFromListIndex(index)
        return (
        <li key={index}>
          <LabelBox>
            <InputBox name={systemName} onChange={onChangeHandler} placeholder={`Player ${index + 1} is...`} />
          </LabelBox>
        </li>
        )
      })
    }
  </ul>
  )
}

export default PlayerNameSetter
