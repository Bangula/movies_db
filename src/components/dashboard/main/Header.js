import React from "react";
import { DebounceInput } from "react-debounce-input";

import { FaSearch } from "react-icons/fa";

function Header(props) {
  const headerDiv = React.createRef();

  React.useEffect(() => {
    let node = headerDiv.current;
    node.style.opacity = "1";
  }, []);

  const { popularMovies, searchMovies } = props;
  let urlPath;
  let url;
  if (popularMovies.length > 0) {
    urlPath = popularMovies[0].backdrop_path;
    url = `http://image.tmdb.org/t/p/original${urlPath}`;
  }
  return (
    <div
      ref={headerDiv}
      className="header h-full border border-black relative"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="header-half" />
      <div className="movie-info header-half container xl mx-auto ">
        <h1 className="movie-name">
          {popularMovies.length ? popularMovies[0].title : null}
        </h1>
        <p>{popularMovies.length ? popularMovies[0].overview : null}</p>
      </div>
      <div className="movies-search absolute pin-b bg-black w-full">
        <div className="container xl mx-auto search-div">
          <div className=" search-input w-full rounded-lg bg-grey-darkest text-grey-dark">
            <span>
              <FaSearch />
            </span>
            <DebounceInput
              minLength={2}
              className="bg-grey-darkest text-grey-dark"
              debounceTimeout={300}
              onChange={e => searchMovies(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
