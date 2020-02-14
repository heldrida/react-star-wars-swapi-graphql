import styled from "styled-components"
import { IPropsTheme } from '../../Types'

const CtaButton = styled.button`
  /* background: ${(props: IPropsTheme) => props.theme.skyColor}; */
  background: #28adfd;
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 0 2rem;
  margin: 2rem 0;
  border: none;
  cursor: pointer;
  box-shadow: 2px 6px 22px ${(props: IPropsTheme) => props.theme.color2};
  transition: opacity 0.3s;
  font-family: "Nunito", sans-serif;  

  &:hover {
    opacity: 0.68;
  }
`

export default CtaButton