import React from 'react'
import styled from 'styled-components'
import { TPropFlag } from '../../Types'
import CtaButton from '../CtaButton'
import { Link } from 'react-router-dom'

const InfoContainer = styled.div<TPropFlag>`
  padding: 1rem 0;
  color: ${(props: TPropFlag) => props.theme.darkText};
  opacity: 0.42;
  font-size: 2rem;

  & > p {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  & > a {
    color: ${(props: TPropFlag) => props.theme.color7};
  }
`

const Info = () => (
  <InfoContainer>
    <p>This projects depends on the <a href="http://graphql.org/swapi-graphql" target="_blank">GraphQl wrapper</a> for the Star Wars API; To avoid CORS or 405 (as confirmed after a reverse proxy at the time of writting, might be different today), run the following <a href="https://docs.docker.com/install/" target="_blank">Docker</a> and <a href="https://github.com/heldrida/react-star-wars-swapi-graphql" target="_blank">service</a> locally.</p>
    <p>If you're checking a live preview link, have in mind that the Graphql API might be down at any time, so please find the project source code in my <a href="https://github.com/heldrida" target="_blank">Github</a> account and run the project by following the instructions provided in the README file. I wrote this project after a request by a company, but put a bit more work to have the following stack available openly: React v16.8, GraphQl w/ Apollo, Hooks effects, memo Cb and local state, styled-components; Javascript + TypeScript, popmotion, etc. Also, Docker!</p>
    <p>Should update the project whenever possible, so you might find a few performance issues in the animations or transitions, solely Desktop tested and developed in Firefox Quantum and Chrome Thanks for reading!</p>
    <Link to='/game'>
      <CtaButton>To proceed...</CtaButton>
    </Link>
  </InfoContainer>
)

export default Info