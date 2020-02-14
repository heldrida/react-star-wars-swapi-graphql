import { createGlobalStyle } from "styled-components";
import appConfig from './config'
import { IPropsTheme, TThemeConf } from './Types'

// [TODO]: Use env var to toggle between default and dark theme on build as bonus requirement
const themeConf: TThemeConf = {
  color0: appConfig.themeColors.default.schaussPink,
  color1: appConfig.themeColors.default.cottonCandy,
  color2: appConfig.themeColors.default.pinkPearl,
  color3: appConfig.themeColors.default.queenPink,
  color4: appConfig.themeColors.default.platinum,
  color5: appConfig.themeColors.default.lightCyan,
  color6: appConfig.themeColors.default.lightBlue,
  color7: appConfig.themeColors.default.darkGrey,
  textDark: appConfig.themeColors.default.darkGrey,
  textLight: appConfig.themeColors.default.lightest,
  skyColor: appConfig.themeColors.default.darkBlue,
  foregroundColor: appConfig.themeColors.default.lightBlue,
  backgroundColor: appConfig.themeColors.default.lightest,
  cta: appConfig.themeColors.default.cta,
  lightGreyBorder: appConfig.themeColors.default.lightGrey
}

const DefaultStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background: ${(props: IPropsTheme) => props.theme.backgroundColor};
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  *:focus {
    outline: none;
  }
`


export {
  themeConf,
  DefaultStyles
}