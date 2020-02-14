import React from 'react'
import { Link } from 'react-router-dom'
import BoxWrapper from '../BoxWrapper'
import {
  Logo,
  Navigation,
  NavigationList,
  NavigationItem  
} from './styled'

const NavigationBar = () => (
  <nav>
    <Navigation>
      <BoxWrapper>
        <NavigationList>
          <NavigationItem>
            <Link to="/"><Logo /></Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/game">Game</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/results">Results</Link>
          </NavigationItem>
        </NavigationList>
      </BoxWrapper>
    </Navigation>
  </nav>
)

export default NavigationBar