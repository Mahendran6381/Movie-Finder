import React, { useState } from "react";

const Movie = (props) => {
  const title = props.title;
  const img = props.img;
  const genere = props.genere;
  const year = props.year;
  const overview = props.overview;
  return (
    <div className="container">
      <img src={img} className="img"></img>
      <div className="movie">
        <h3>{title}</h3>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>{genere}</h4>
        <h4>{year}</h4>
      </div>
    </div>
  );
};
export default Movie;
