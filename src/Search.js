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
      <section>
        <h3 className="mt-3 mb-4">What word do you want to look for?</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word..."
            autoFocus="on"
            onChange={getWord}
            className="form-control"
          ></input>
        </form>
        <p className="opacity-75 mt-4">e.g. book, sunset, forest</p>
      </section>
      <Results results={results} />
    </div>
  );
}
