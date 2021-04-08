import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
            </p>
            <p className="example">
              <span>"{definition.example}"</span>
            </p>
            <div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        )
      })}
    </div>
  )
}