import React from "react";
import { Link } from "react-router-dom";

function PopularMovies({ popularMoviesSearch, updateList }) {
  let urlPath;
  let url;

  const moviesList =
    popularMoviesSearch.length > 0
      ? popularMoviesSearch
          .filter(
            item => item.poster_path != null || item.poster_path != undefined
          )
          .map((item, index) => {
            urlPath = item.poster_path;
            url = `http://image.tmdb.org/t/p/w500/${urlPath}`;

            return (
              <div
                className="movie-item flex-4 items-stretch"
                key={item.id + index}
              >
                <Link to={`/details/${item.id}`} className="popular-link">
                  <img
                    style={{ height: "400px" }}
                    src={url}
                    alt="movie poster"
                    className="z-10"
                  />
                </Link>
              </div>
            );
          })
      : null;

  return (
    <div className="popular-movies container xl mx-auto">
      <h1>Popular Movies</h1>
      <div className="movies-list z-20">{moviesList}</div>
      <div className="load-more">
        <button onClick={() => updateList()}>Load More</button>
      </div>
    </div>
  );
}

export default PopularMovies;
