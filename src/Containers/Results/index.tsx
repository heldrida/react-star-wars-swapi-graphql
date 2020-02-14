import React, { useState } from 'react'
import AppConfiguration from '../../config'

const Results = () => {
  // TODO: move as helper fn, and reuse it everywhere
  const resultsPropertyName = `${AppConfiguration.application.name}_result_history`
  const data = window.localStorage.hasOwnProperty(resultsPropertyName) &&
              JSON.parse(window.localStorage[resultsPropertyName])
  console.log('[debug] Results: data: ', data)
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
        <button onClick={clearResultHistory}>Clear results history!</button>
        <ul>
          {
            Array.isArray(resultsData) &&
            resultsData.map((v: any, index: number) => (
              <li key={index}>
                <p>{`Player name: ${v.playerName}`}</p>
                <p>{`Date: ${v.date}`}</p>
                <p>{`Time: ${v.time}`}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )) ||
    <p>{'results do not exist yet!'}</p>
  )
}

export default Results