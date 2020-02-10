import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './Components'
import { Home, Results } from './Containers'
import { ThemeProvider } from "styled-components";
import appConfig from './config'

// [TODO]: Use env var to toggle between default and dark theme on build as bonus requirement
const themeConf = {
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
  backgroundColor: appConfig.themeColors.default.pinkPearl
};

const App = () => {
  return (
    <ThemeProvider theme={themeConf}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App