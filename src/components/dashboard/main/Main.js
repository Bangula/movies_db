import React from "react";
import axios from "axios";

import Header from "./Header";
import PopularMovies from "./PopularMovies";
import Loader from "../../Loader";

const apiKey = "fc22f3679adfcc3e819328e339157dfa";

function Main() {
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [popularMoviesSearch, setPopularMoviesSearch] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    getMovies();
    searchMovies();
    if (pageNum > 1) {
      searchMovies();
    }
  }, [pageNum]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
      )
      .then(res => {
        setPopularMovies(res.data.results);
        setLoader(false);
      })
      .catch(err => console.log(err));
  };

  const searchMovies = searchQuery => {
    if (searchQuery) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&query=${searchQuery}`
        )
        .then(res => {
          setPopularMoviesSearch(res.data.results);
          setLoader(false);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${pageNum}`
        )
        .then(res => {
          let newList = popularMoviesSearch.concat(res.data.results);
          setPopularMoviesSearch(newList);
          setLoader(false);
        })
        .catch(err => console.log(err));
    }
  };

  const updateList = () => {
    setPageNum(pageNum => pageNum + 1);
  };

  return (
    <div className="">
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header popularMovies={popularMovies} searchMovies={searchMovies} />
          <PopularMovies
            popularMoviesSearch={popularMoviesSearch}
            updateList={updateList}
          />
        </>
      )}
    </div>
  );
}

export default Main;
