import React, { useState } from 'react'
import { getResultsPropertyName } from '../../Helpers'
import CtaButton from '../../Components/CtaButton'
import { Link } from 'react-router-dom'
import {
  TextFadeInfinityContainer,
  Stripe,
  WinnerContainer,
  NoResultsYet
} from './styled'

const Results = () => {
  const resultsPropertyName = getResultsPropertyName()
  const data = window.localStorage.hasOwnProperty(resultsPropertyName) &&
              JSON.parse(window.localStorage[resultsPropertyName])
  const reversed = Array.isArray(data) && [...data].reverse()
  const [resultsData, setResultsData] = useState(reversed)
  const clearResultHistory = () => {
    window.localStorage.clear()
    setResultsData([])
  }
  return (
    (resultsData &&
    Array.isArray(resultsData) &&
    resultsData.length > 0 &&
    (
      <div>
        <CtaButton bg={'#fd6d6d'} onClick={clearResultHistory}>Clear results history</CtaButton>
        <TextFadeInfinityContainer>
          <Stripe>
            <div>
              <p>The Episode VI</p>
              <h1>Top Trumps</h1>
            </div>
            {
            Array.isArray(resultsData) &&
            resultsData.map((v: any, index: number) => (
              <WinnerContainer key={index}>
                <p>{`${v.playerName} at ${v.time} of ${v.date}`}</p>
              </WinnerContainer>
            ))
          }
          </Stripe>
        </TextFadeInfinityContainer>
      </div>
    )) ||
    <NoResultsYet>
      <Link to="/game">Oops! Got no results yet! Click here to play?</Link>
    </NoResultsYet>
  )
}

export default Results