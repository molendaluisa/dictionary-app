import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Search.css";

//https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

export default function Search() {
  const [keyword, setKeyword] = useState("developer");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [img, setImg] = useState([]);

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function handleImages(response) {
    setImg(response.data.results);
  }

  function getAPI() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let imgUrl = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=3diyqkI801kLfrBphD2dM1wn1of4asSjwQLv_wfK1n0&per_page=9&orientation=landscape`;
    axios.get(imgUrl).then(handleImages)
  }

  function handleSearch(event) {
    event.preventDefault();
    getAPI()
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    getAPI();
  }

  if (loaded) {
    return (
      <div className="Search" onSubmit={handleSearch}>
        <section>
          <h1>What word are you looking for?</h1>
          <form>
            <input type="search" placeholder="Search for a word" defaultValue={keyword} onChange={handleKeywordChange} />
          </form>
        </section>
        <Results results={results} />
        <Images img={img} />
      </div>
    )
  } else {
    load();
    return "loading..."
  }
}