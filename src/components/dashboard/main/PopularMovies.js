import React from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../../context/ContextProvider";

function PopularMovies() {
  const { getPopularMovies, state, getMovieById } = React.useContext(
    MoviesContext
  );

  React.useEffect(() => {
    getPopularMovies();
  }, []);

  const { popularMovies } = state;
  //console.log(popularMovies);

  const moviesList = popularMovies.map(item => {
    let urlPath;
    let url;
    if (popularMovies.length > 0) {
      urlPath = item.poster_path;
      url = `http://image.tmdb.org/t/p/w500/${urlPath}`;
    }

    return (
      <div className="movie-item flex-4 items-stretch" key={item.id}>
        <Link to={`/details/${item.id}`} className="popular-link">
          <img src={url} alt="movie poster" className="z-10" />
        </Link>
      </div>
    );
  });

  return (
    <div className="popular-movies container ls mx-auto">
      <h1>Popular Movies</h1>
      <div className="movies-list z-20 flex flex-wrap">{moviesList}</div>
    </div>
  );
}

export default PopularMovies;
