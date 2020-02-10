import React from 'react'
import AppConfiguration from '../../config'
import { configurationCsvToArr } from '../../Helpers'
import { TSelectOnChangeCallback } from '../../Types'

interface INumberOfPlayerSelectProps {
  onChangeHandler: TSelectOnChangeCallback
  numberOfPlayers: number
}

const { selectableNumberOfPlayersCsv } = AppConfiguration
const dataToSelectMap: number[] = configurationCsvToArr(selectableNumberOfPlayersCsv)

const NumberOfPlayerSelect: React.FC<INumberOfPlayerSelectProps> = ({onChangeHandler, numberOfPlayers}) => (
  <select onChange={onChangeHandler} value={numberOfPlayers}>
    {
      Array.isArray(dataToSelectMap) &&
      dataToSelectMap.map((val, index) => <option key={index} value={val}>{val}</option>)
    }
  </select>
)

export default NumberOfPlayerSelect
