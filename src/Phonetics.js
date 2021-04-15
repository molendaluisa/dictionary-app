import React from "react";
import Player from "./Player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <Player audio={props.phonetics.audio} />
        <div className="text">{props.phonetics.text}</div>
      </div>
    );
  } else {
    return null;
  }
}