import React from "react";
import { MoviesContext } from "../../../context/ContextProvider";

function Header() {
  const { state } = React.useContext(MoviesContext);
  const { popularMovies } = state;
  console.log(popularMovies[0]);

  // image url
  // let urlPath;
  // let url;
  // if(popularMovies[0].poster_path){
  //   urlPath = popularMovies[0].poster_path;
  //   url = `http://image.tmdb.org/t/p/original/${urlPath}`;
  // }else {
  //   urlPath = null;
  //   url = null;
  // }

  let urlPath;
  let url;
  if (popularMovies.length > 0) {
    urlPath = popularMovies[0].backdrop_path;
    url = `http://image.tmdb.org/t/p/original${urlPath}`;
  }

  return (
    <div
      className="header h-full border border-black relative"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="header-half" />
      <div className="movie-info header-half container lg mx-auto ">
        <h1 className="movie-name">
          {popularMovies.length ? popularMovies[0].title : null}
        </h1>
        <p>{popularMovies.length ? popularMovies[0].overview : null}</p>
      </div>
      <div className="movies-search absolute pin-b bg-black w-full">
        <div className="container lg mx-auto search-div">
          <input
            type="text"
            className="w-full rounded-lg bg-grey-darkest text-grey-dark"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
