import React from 'react'
import { PLAYER_MODE_OPTIONS } from '../../Constants' 
import { IPlayerModeSelectProps } from '../../Types'
import SelectBox from '../SelectBox'

const PlayerModeSelect: React.FC<IPlayerModeSelectProps> = ({onChangeHandler, playerMode}) => (
  <SelectBox onChange={onChangeHandler} value={playerMode}>
    {
      PLAYER_MODE_OPTIONS.map((val, index) => <option key={index} value={val}>{val}</option>)
    }
  </SelectBox>
)

export default PlayerModeSelect
