import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.nav`
  background: grey;
  color: #333;
`

const NavigationList = styled.ul`
  border-bottom: 1px solid #333;
`

const NavigationItem = styled.li`
  list-style-type: none;
  padding-left: 0;
  display: inline-block;
  margin-right: 2rem;
`

const NavigationBar = () => (
  <nav>
    <Navigation>
      <NavigationList>
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/results">Results</Link>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  </nav>
)

export default NavigationBar