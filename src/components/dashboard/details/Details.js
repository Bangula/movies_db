import React from "react";

import DetailsHeader from "./DetailsHeader";
import Actors from "./Actors";

function Details(props) {
  const id = props.match.params.movieId;
  return (
    <div className="details">
      <DetailsHeader id={id} />
      <Actors />
    </div>
  );
}

export default Details;
