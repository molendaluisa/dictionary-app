import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

//https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

export default function Search() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response)
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search" onSubmit={handleSearch}>
      <form>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  )
}