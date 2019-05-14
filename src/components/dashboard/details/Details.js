import React from "react";

import DetailsHeader from "./DetailsHeader";
import Actors from "./Actors";

function Details(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const id = props.match.params.movieId;

  return (
    <div className="details">
      <div className="details">
        <DetailsHeader id={id} />
        <Actors id={id} />
      </div>
    </div>
  );
}

export default Details;
