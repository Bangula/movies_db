import React from "react";
import { MoviesContext } from "../../../context/ContextProvider";
import { Link } from "react-router-dom";

import DetailsFooter from "./DetailsFooter";

function DetailsHeader({ id }) {
  const { getMovieById, state } = React.useContext(MoviesContext);

  React.useEffect(() => {
    getMovieById(id);
  }, []);

  const { movieById } = state;

  if (movieById.id) {
    console.log(movieById);
  }

  let backdropPath;
  let posterPath;
  let url1;
  let url2;
  if (movieById.id) {
    backdropPath = movieById.backdrop_path;
    posterPath = movieById.poster_path;
    url1 = `http://image.tmdb.org/t/p/original${backdropPath}`;
    url2 = `http://image.tmdb.org/t/p/original${posterPath}`;
  }

  return (
    <>
      <div className="sub-nav">
        <div className="container lg mx-auto">
          <p>
            <Link to="/">Home</Link> / {movieById.title}
          </p>
        </div>
      </div>
      <div className="header" style={{ backgroundImage: `url(${url1})` }}>
        <div className="header-info container lg mx-auto flex">
          <div
            className="movie-poster"
            style={{ backgroundImage: `url(${url1})` }}
          />
          <div className="movie-info" />
        </div>
      </div>

      <DetailsFooter />
    </>
  );
}

export default DetailsHeader;
