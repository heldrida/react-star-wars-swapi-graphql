import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BoxWrapper from '../BoxWrapper'

const Navigation = styled.nav`
  background: ${(props) => props.theme.foregroundColor};
  height: auto;
  box-shadow: 2px 6px 18px ${(props) => props.theme.color4}, 2px 6px 32px ${(props) => props.theme.color2};
  border-bottom: 1px solid ${(props) => props.theme.color0};
`

const NavigationList = styled.ul`
  line-height: 4rem;
  margin: 0 auto;
  padding: 0;
`

const NavigationItem = styled.li`
  list-style-type: none;
  padding-left: 0;
  display: inline-block;
  margin-right: 3rem;
  letter-spacing: 0.05rem;
  color: white;
  text-shadow: 1px 2px 16px ${(props) => props.theme.color6}, 3px -3px 4px ${(props) => props.theme.color0};

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
      <BoxWrapper>
        <NavigationList>
          <NavigationItem>
            <Link to="/">Home</Link>
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