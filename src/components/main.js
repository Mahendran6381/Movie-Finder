import { ContactSupportOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Main = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const POPULAR =
    "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR API KEY >&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=4&with_watch_monetization_types=flatrate";
  const REQUEST = `https://api.themoviedb.org/3/search/movie?api_key=<YOUR API KEY >&query=${search}`;
  const IMAGE = `https://image.tmdb.org/t/p/w300`;
  const [re, setRe] = useState(false);

  useEffect(() => {
    console.log(re);
    fetch(re ? REQUEST : POPULAR)
      .then((data) => data.json())
      .then((res) => setMovie(res.results));
  }, [re]);
  const req = () => {
    //
    // console.log("j");
  };
  console.log(search);
  const prop = movie.map((item) => {
    return (
      <Movie
        title={item.original_title}
        img={IMAGE + item.poster_path}
        genere={item.vote_average}
        year={item.release_date}
        overview={item.overview}
      ></Movie>
    );
  });
  console.log(search);
  return (
    <>
      <header>
        <nav className="nav">
          <div className="title cl">
            <h2>Movies</h2>
          </div>
          <div className="search cl">
            <input
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => {
                setRe(!re);
              }}
            >
              search
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div className="cls">{prop}</div>
      </main>
    </>
  );
};

export default Main;
