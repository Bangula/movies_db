import React from 'react';
import { MoviesContext } from '../../../context/ContextProvider';

function Header() {

  const {state} = React.useContext(MoviesContext);
  const { popularMovies } = state;
  console.log(popularMovies[0]);

  // image url
  //  http://image.tmdb.org/t/p/original/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg
  

  return (
    <div className='header h-full border border-black relative'>
      <div className='header-half'>

      </div>
      <div className="movie-info header-half container lg mx-auto ">
      
        <h1 className='movie-name'>Movie name</h1>
        <p>Movie description</p>
        
      </div>
      <div className="movies-search absolute pin-b bg-black border border-red w-full">
        <div className="container lg mx-auto search-div">
          <input type="text" className='w-full rounded-lg bg-grey-darkest text-grey-dark' placeholder='Search' />
        </div>        
      </div>
      
    </div>
  )
}

export default Header;
