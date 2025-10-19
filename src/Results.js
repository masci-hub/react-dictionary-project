import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="mt-3">{props.results.word}</h2>
        <h3 className="mb-2 opacity-75">{props.results.phonetic}</h3>
        <p className="fw-bold">{props.results.meanings[0].partOfSpeech}</p>
        <p>{props.results.meanings[0].definition}</p>
        <p>
          <strong>similar:</strong> {props.results.meanings[0].synonyms}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
