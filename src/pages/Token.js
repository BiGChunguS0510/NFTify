import React, {useState} from 'react'

import { SearchBar } from '../components/SearchBar';
import { TokenResults } from '../components/TokenResults';

export const Token = () => {

  const [results, setResults] = useState([]);

  return (
    <div className='token'>
      <SearchBar setResults={setResults} site="token"/>
      <TokenResults results={results} site="Token"/>
    </div>
  )
}
