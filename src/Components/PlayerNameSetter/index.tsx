import React from 'react'
import { IPropsPlayerNameSetter } from '../../Types'
import { playerNameFromListIndex } from '../../Helpers'
import styled from 'styled-components'
import { fontLabelStyle } from '../../sharedStyles'

const InputBox = styled.input`
  font-size: 16px;
  padding: .6em 1.4em .5em .8em;
  display: inline-block;
  line-height: 1.5;
  border: 1px solid #aaa;
  border-radius: .5em;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  margin: 1rem 0;
  width: 14rem;
`

const LabelBox = styled.label`
  ${fontLabelStyle}  
`

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
