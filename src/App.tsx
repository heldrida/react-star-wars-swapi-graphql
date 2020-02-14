import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Results } from './Containers'
import { ThemeProvider } from "styled-components";
import { themeConf, DefaultStyles } from './styled'
import { NavigationBar, BoxWrapper, Game } from './Components'
import { GameProvider } from './Context'

const App = () => {
  return (
    <ThemeProvider theme={themeConf}>
      <DefaultStyles />
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/game">
            <BoxWrapper>
              <GameProvider>
                <Game />
              </GameProvider>
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