import React from 'react'
import PlayerNameSetter from './index'
import { render, fireEvent } from '@testing-library/react'

describe('PlayerNameSetter', () => {
  const onChangeHandler = jest.fn(() => null)
  const numberOfPlayers = 6
  const { container } = render(<PlayerNameSetter onChangeHandler={onChangeHandler} numberOfPlayers={numberOfPlayers} />)
  const userInputData = 'John Michael'
  const userInputChars = [...userInputData]
  const input = container.querySelector('input[name="Player5"]')
  
  // events
  userInputChars.reduce((acc, curr) =>{
    acc += curr
    fireEvent.change(input, { target: { value: acc } })
    return acc
  }, "")

  it('should render a list of inputs equal to number of players', () => {
    expect(container.querySelectorAll('input').length).toBe(numberOfPlayers)
  })
  
  it('should display the user input', () => {
    expect(input.value).toBe(userInputData)  
  })

  it('should call the onChange handler per each user typed character', () => {
    expect(onChangeHandler.mock.calls.length).toBe(userInputChars.length)
  })

})