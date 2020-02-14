import styled from 'styled-components'
import { fontLabelStyle } from '../../sharedStyles'
import { TPropFlag } from '../../Types'

const InputBox = styled.input<TPropFlag>`
  font-size: 16px;
  padding: .6em 1.4em .5em .8em;
  display: inline-block;
  line-height: 1.5;
  border: 1px solid ${(props) => props.theme.lightGreyBorder};
  border-radius: .5em;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  margin: 1rem 0;
  width: 14rem;
`

const LabelBox = styled.label`
  ${fontLabelStyle}  
`

export {
  InputBox,
  LabelBox
}