import React from 'react'
import { TokenResult } from './TokenResult'
import "./TokenResults.css"

export const TokenResults = ({results, site}) => {
  results.sort((a, b) => {
    return parseFloat(b.priceUsd) - parseFloat(a.priceUsd);
    
});
  return (
    <div className='token-results'>
      <div className='token-results-header'>{site} Search Results</div>
      {results.map((result, index) => {
        return(
          <TokenResult key={index} result={result}/>
        )
      })}
    </div>
  )
}
