import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "733615547b11515efo464ab9111t0c1b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word..."
          className="form-control w-50"
          autoFocus="on"
          onChange={getWord}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
