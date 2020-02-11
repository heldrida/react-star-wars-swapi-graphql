import React from 'react'
import AppConfiguration from '../../config'
import { configurationCsvToArr } from '../../Helpers'
import { INumberOfPlayerSelectProps } from '../../Types'
import SelectBox from '../SelectBox'

const { selectableNumberOfPlayersCsv } = AppConfiguration
const dataToSelectMap: number[] = configurationCsvToArr(selectableNumberOfPlayersCsv)

const NumberOfPlayerSelect: React.FC<INumberOfPlayerSelectProps> = ({onChangeHandler, numberOfPlayers}: INumberOfPlayerSelectProps) => (
  <SelectBox onChange={onChangeHandler} value={numberOfPlayers}>
    {
      Array.isArray(dataToSelectMap) &&
      dataToSelectMap.map((val, index) => <option key={index} value={val}>{val}</option>)
    }
  </SelectBox>
)

export default NumberOfPlayerSelect
