import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "733615547b11515efo464ab9111t0c1b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word..."
          className="form-control"
          autoFocus="on"
          onChange={getWord}
        ></input>
      </form>
    </div>
  );
}
