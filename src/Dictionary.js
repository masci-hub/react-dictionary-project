import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching ${word} in the dictionary...`);
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
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
