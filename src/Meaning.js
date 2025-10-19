import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="fw-bold">{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <p className="fst-italic">{props.meaning.example}</p>
    </div>
  );
}
