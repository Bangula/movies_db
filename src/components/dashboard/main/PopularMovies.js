import React from 'react';
import { MoviesContext } from '../../../context/ContextProvider';

function PopularMovies() {

    const { getPopularMovies, state } = React.useContext(MoviesContext);

    React.useEffect(() => {
        getPopularMovies();
    }, [])
    const { popularMovies } = state;
    //console.log(popularMovies);

    const moviesList = popularMovies.map(item => {
        return (
            <div key={item.id}>
                <h1>{item.title}</h1>
            </div>
        )
    })

  return (
    <div>
      <h1>Popular list</h1>
        {moviesList}
    </div>
  )
};


export default PopularMovies;
