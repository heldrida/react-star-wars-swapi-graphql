import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './Components'
import { Home, Results } from './Containers'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import appConfig from './config'
import { TPropsTheme, TThemeConf } from './Types'
import { BoxWrapper } from './Components'

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
  textLight: appConfig.themeColors.default.lightGrey,
  foregroundColor: appConfig.themeColors.default.lightBlue,
  backgroundColor: appConfig.themeColors.default.lightCyan
}

const DefaultStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background: ${(props: TPropsTheme) => props.theme.backgroundColor};
  }
  ol, ul {
    list-style: none;
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={themeConf}>
      <DefaultStyles />
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <BoxWrapper>
              <Home />
            </BoxWrapper>
          </Route>
          <Route exact path="/results">
            <BoxWrapper>
              <Results />
            </BoxWrapper>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App