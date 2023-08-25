import { useState } from "react";
import React from "react";

import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";

export const SearchBar = ({setResults, site}) => {
  const [input, setInput] = useState("");

  const apiLink = "https://api.dexscreener.com/latest/dex/search/?q=";
  console.log(site === "pair");
  const fetchData = (value) => {
    if(value.length <= 2) return null;
    fetch(apiLink + value)
      .then((response) => response.json())
      .then((json) => {
        const results = json.pairs.filter((result) => {
          if(site === "pair"){
            return value && result && result.pairAddress.toLowerCase().startsWith(value) && result.pairCreatedAt;
          } else{
            return value && result && result.baseToken.address.toLowerCase().startsWith(value) && result.pairCreatedAt;
          }
          
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id="search-icon" style={{ color: "#FFF" }} size={20} />
    </div>
  );
};
