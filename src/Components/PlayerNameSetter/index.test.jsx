import React from 'react'
import PlayerNameSetter from './index'
import { render } from '@testing-library/react'

test('should render a list of inputs equal to number of players', () => {
  const onChangeHandler = jest.fn(() => null)
  const numberOfPlayers = 6
  const { container } = render(<PlayerNameSetter onChangeHandler={onChangeHandler} numberOfPlayers={numberOfPlayers} />)
  expect(container.querySelectorAll('input').length).toBe(numberOfPlayers)
})