import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="fw-bold">{props.results.word}</h2>
          <h3 className="opacity-75">{props.results.phonetic}</h3>
        </section>
        <Meaning meaning={props.results.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
