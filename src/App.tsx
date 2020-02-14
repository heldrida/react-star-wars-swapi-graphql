import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './Components'
import { Home, Results } from './Containers'
import { ThemeProvider } from "styled-components";
import { BoxWrapper } from './Components'
import { themeConf, DefaultStyles } from './styled'

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