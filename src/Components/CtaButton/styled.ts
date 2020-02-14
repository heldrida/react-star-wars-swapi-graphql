import styled from "styled-components"
import { TPropFlag } from '../../Types'

const CtaButton = styled.button<TPropFlag>`
  background: ${(props: TPropFlag) => props.bg || props.theme.cta};
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 0 2rem;
  margin: 2rem 0;
  border: none;
  cursor: pointer;
  box-shadow: 2px 6px 22px ${(props: TPropFlag) => props.theme.color2};
  transition: opacity 0.3s;
  font-family: "Nunito", sans-serif;  

  &:hover {
    opacity: 0.68;
  }
`

export default CtaButton