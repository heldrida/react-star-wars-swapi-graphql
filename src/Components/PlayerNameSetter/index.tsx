import React from 'react'
import { IPropsPlayerNameSetter } from '../../Types'
import { playerNameFromListIndex } from '../../Helpers'

const PlayerNameSetter = ({onChangeHandler, numberOfPlayers}: IPropsPlayerNameSetter) => {

  return (
    <ul>
    {
      [...Array(numberOfPlayers)].map((val, index) => {
        const name = playerNameFromListIndex(index)
        return (
        <li key={index}>
          <label>
            {name}
            <input name={name} onChange={onChangeHandler} />
          </label>
        </li>
        )
      })
    }
  </ul>
  )
}

export default PlayerNameSetter
