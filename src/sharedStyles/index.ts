import { css } from 'styled-components'
import { IPropsTheme } from '../Types'

const boxShadowStyle = css`
  box-shadow: 2px 6px 18px ${(props) => props.theme.color4}, 2px 6px 32px ${(props) => props.theme.color2};
`

const lightTextShadow = css`
  text-shadow: -1px 1px 2px #333,
               1px -2px 4px ${(props: IPropsTheme) => props.theme.color0};
`

const fontTitlesStyle = css`
  font-family: "Fredoka One",sans-serif;
  letter-spacing: 0.02rem;
`

const fontLabelStyle = css`
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.02rem;
`

export {
  boxShadowStyle,
  lightTextShadow,
  fontTitlesStyle,
  fontLabelStyle
}