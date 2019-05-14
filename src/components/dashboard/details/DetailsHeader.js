import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DetailsFooter from "./DetailsFooter";
import Loader from "../../Loader";

function DetailsHeader({ id }) {
  const [movie, setMovie] = React.useState({});
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fc22f3679adfcc3e819328e339157dfa`
      )
      .then(res => {
        console.log(res.data);
        setMovie(res.data);
        setLoader(false);
      })
      .catch(console.log);
  }, []);

  let backdropPath,
    posterPath,
    url1,
    url2,
    rating,
    meterWidth,
    hours,
    minutes,
    runtime,
    budget,
    revenue;

  if (movie.id) {
    backdropPath = movie.backdrop_path;
    posterPath = movie.poster_path;
    url1 = `http://image.tmdb.org/t/p/original${backdropPath}`;
    url2 = `http://image.tmdb.org/t/p/original${posterPath}`;

    rating = movie.vote_average;
    meterWidth = rating * 10 + "%";

    hours = Math.floor(movie.runtime / 60);
    minutes = movie.runtime % 60;
    runtime = `${hours}h ${minutes}m`;

    budget = movie.budget;
    budget = budget.toLocaleString("en");

    revenue = movie.revenue;
    revenue = revenue.toLocaleString("en");
  }

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="sub-nav">
            <div className="container xl mx-auto">
              <p>
                <Link to="/">Home</Link> / {movie.title}
              </p>
            </div>
          </div>
          <div className="header" style={{ backgroundImage: `url(${url1})` }}>
            <div className="header-info container lg mx-auto">
              <div
                className="movie-poster"
                style={{ backgroundImage: `url(${url2})` }}
              />
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <h3 className="">PLOT</h3>
                <p>{movie.overview}</p>
                <h3 className="">GENRES</h3>

                <div className="genres">
                  {movie.genres &&
                    movie.genres.map(item => {
                      return <span key={item.id}>{item.name}</span>;
                    })}
                </div>
                <h3>IMDB RATING</h3>

                <div className="rating-container">
                  <div className="rating">
                    <span
                      className="meter"
                      style={{ width: meterWidth, display: "block" }}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        color: "white",
                        position: "absolute",
                        bottom: "0"
                      }}
                    >
                      {movie.vote_average && movie.vote_average}
                    </span>
                  </div>
                </div>

                <h3>DIRECTORS</h3>
                <p>{}</p>
                <p>{}</p>
              </div>
            </div>
          </div>

          <DetailsFooter runtime={runtime} budget={budget} revenue={revenue} />
        </>
      )}
    </>
  );
}

export default DetailsHeader;
