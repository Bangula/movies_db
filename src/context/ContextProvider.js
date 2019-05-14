import React from "react";
import axios from "axios";

const MoviesContext = React.createContext();

const ContextProvider = props => {
  const [state, setState] = React.useState({
    popularMovies: [],
    credits: [],
    movieById: {}
  });

  const apiKey = "fc22f3679adfcc3e819328e339157dfa";

  const getPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
      )
      .then(res => {
        setState({
          ...state,
          popularMovies: res.data.results
        });
      })
      .catch(err => console.log(err));
  };

  const getMovieById = id => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fc22f3679adfcc3e819328e339157dfa`
      )
      .then(res => {
        setState({
          ...state,
          movieById: res.data
        });
        props.history.push("/details");
      })
      .catch(err => console.log(err));
  };
  const getCredits = id => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fc22f3679adfcc3e819328e339157dfa`
      )
      .then(res => {
        setState({
          ...state,
          credits: res.data.cast
        });
      });
  };

  return (
    <MoviesContext.Provider
      value={{ state, getPopularMovies, getMovieById, getCredits }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export { ContextProvider, MoviesContext };
