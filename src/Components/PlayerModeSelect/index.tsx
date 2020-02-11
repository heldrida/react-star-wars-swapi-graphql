import React from 'react'
import { PLAYER_MODE_OPTIONS } from '../../Constants' 
import { IPlayerModeSelectProps } from '../../Types'

const PlayerModeSelect: React.FC<IPlayerModeSelectProps> = ({onChangeHandler, playerMode}) => (
  <select onChange={onChangeHandler} value={playerMode}>
    {
      PLAYER_MODE_OPTIONS.map((val, index) => <option key={index} value={val}>{val}</option>)
    }
  </select>
)

export default PlayerModeSelect
