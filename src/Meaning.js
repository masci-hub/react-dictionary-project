import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h4 className="fw-bold">{props.meaning.partOfSpeech}</h4>
        <p>{props.meaning.definition}</p>
        <p className="fst-italic">{props.meaning.example}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
