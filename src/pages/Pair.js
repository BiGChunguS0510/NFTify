import React, {useState} from 'react'

import { SearchBar } from '../components/SearchBar';
import { TokenResults } from '../components/TokenResults';

export const Pair = () => {
  const [results, setResults] = useState([]);

  return (
    <div className='token'>
      <SearchBar setResults={setResults} site="pair"/>
      <TokenResults results={results} site="Pair"/>
    </div>
  )
}
