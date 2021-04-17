import React from "react";
import "./Images.css"


export default function Images(props) {
  return (
    <section className="Images">
      <div className="row">
        {props.img.map(function (img, index) {
          return (
            <div className="col-12 col-md-4" key={index}>
              <a href={img.links.html} target="_blank" rel="noreferrer">
                <img src={img.urls.small} className="rounded" alt=" search results"></img>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  );
}