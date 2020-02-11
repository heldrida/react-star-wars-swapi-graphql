import React from 'react'
import AppConfiguration from '../../config'
import { configurationCsvToArr } from '../../Helpers'
import { INumberOfPlayerSelectProps } from '../../Types'

const { selectableNumberOfPlayersCsv } = AppConfiguration
const dataToSelectMap: number[] = configurationCsvToArr(selectableNumberOfPlayersCsv)

const NumberOfPlayerSelect: React.FC<INumberOfPlayerSelectProps> = ({onChangeHandler, numberOfPlayers}: INumberOfPlayerSelectProps) => (
  <select onChange={onChangeHandler} value={numberOfPlayers}>
    {
      Array.isArray(dataToSelectMap) &&
      dataToSelectMap.map((val, index) => <option key={index} value={val}>{val}</option>)
    }
  </select>
)

export default NumberOfPlayerSelect
