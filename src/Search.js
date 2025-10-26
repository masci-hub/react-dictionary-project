import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { ClipLoader } from "react-spinners";

export default function Search() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data);
  }

  function searchWord(keyword) {
    const apiKey = "733615547b11515efo464ab9111t0c1b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    if (word.length > 0) {
      searchWord(word);
    } else {
      alert("Please enter a word");
    }
    event.preventDefault();

    setWord("");
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  let searchForm = (
    <section>
      <h3 className="mt-3 mb-4">What word do you want to look for?</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word..."
          autoFocus="on"
          onChange={getWord}
          className="form-control"
          value={word}
        ></input>
      </form>
      <p className="opacity-75 mt-4">e.g. book, sunset, forest</p>
    </section>
  );

  if (results) {
    return (
      <div className="Search">
        {searchForm}
        <Results results={results} />
      </div>
    );
  } else {
    searchWord("book");
    return (
      <ClipLoader
        color="#6c63ff"
        loading={true}
        size={70}
        speedMultiplier={1}
        cssOverride={override}
        className="mb-5"
      />
    );
  }
}

const override = {
  display: "block",
  margin: "0 auto",
};
