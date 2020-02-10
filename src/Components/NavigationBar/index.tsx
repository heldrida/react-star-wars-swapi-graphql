import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.nav`
  background: ${(props) => props.theme.foregroundColor};
  height: auto;
`

const NavigationList = styled.ul`
  line-height: 4rem;
`

const NavigationItem = styled.li`
  list-style-type: none;
  padding-left: 0;
  display: inline-block;
  margin-right: 2rem;
  color: white;

  & > a {
    color: ${(props) => props.theme.textLight};
    text-decoration: none;
    font-family: "Fredoka One", sans-serif;
    transition: opacity .2s;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
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