import React from 'react'
import NumberOfPlayerSelection from './index'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import AppConfiguration from '../../config'
import { configurationCsvToArr } from '../../Helpers'

const { selectableNumberOfPlayersCsv } = AppConfiguration
const dataToSelectMap: number[] = configurationCsvToArr(selectableNumberOfPlayersCsv)

test('should render a list of options', () => {
  const onChangeHandler = jest.fn(() => null)
  const numberOfPlayers = 4
  const { container } = render(<NumberOfPlayerSelection onChangeHandler={onChangeHandler} numberOfPlayers={numberOfPlayers} />)
  expect(container.querySelectorAll('select option').length).toBe(dataToSelectMap.length)
})