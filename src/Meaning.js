import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        {props.meaning.map(function (meaning, index) {
          return (
            <section key={index}>
              <h4 className="fw-bold mb-3">{meaning.partOfSpeech}</h4>
              <p>{meaning.definition}</p>
              <p className="fst-italic">{meaning.example}</p>
              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
