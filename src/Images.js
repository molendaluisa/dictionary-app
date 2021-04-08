import React from "react";
import "./Images.css"


export default function Images(props) {
  return (
    <section className="Images">
      {props.img.map(function (img, index) {
        return (
          <div key={index}>
            <img src={img.urls.small} className="img-fluid rounded" alt="search results"></img>
          </div>
        )
      })}
    </section>
  );
}