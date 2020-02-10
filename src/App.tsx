import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Results } from './Containers'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  )
}

export default App