import React from "react";
import axios from "axios";

import noImage from "../../../images/no_image.jpg";

function Actors({ id }) {
  const [actors, setActors] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fc22f3679adfcc3e819328e339157dfa`
      )
      .then(res => {
        setActors(res.data.cast);
        console.log(res.data.cast);
      })
      .catch(console.log);
  }, [id]);

  let profileImage;

  const actorsList = actors
    ? actors.map(item => {
        profileImage = !item.profile_path
          ? noImage
          : `http://image.tmdb.org/t/p/w154${item.profile_path}`;
        return (
          <div key={item.cast_id} className="actor-item">
            <div className="actor-img">
              <img
                src={profileImage}
                alt="actorImage"
                style={{ display: "block", height: "185px" }}
              />
            </div>
            <div className="actor-info">
              <p className="actor-name">{item.name}</p>
              <p className="char-name">{item.character}</p>
            </div>
          </div>
        );
      })
    : null;

  return (
    <div className="actors">
      <h1 className="pl-3">Actors</h1>

      <div className="actors-list ">{actorsList}</div>
    </div>
  );
}

export default Actors;
