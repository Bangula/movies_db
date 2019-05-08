import React from 'react';
import axios from 'axios';

const MoviesContext = React.createContext();

const ContextProvider = (props) => {

    const [state, setState] = React.useState({
        popularMovies: [],
        movieById: {}
    })
    
    const apiKey = 'fc22f3679adfcc3e819328e339157dfa';

    const getPopularMovies = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`)
            .then(res => {
                console.log(res.data)
                setState({
                    ...state,
                    popularMovies: res.data.results
                })
            })
            .catch(err => console.log(err))
    }

    const getMovieById = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fc22f3679adfcc3e819328e339157dfa`)
            .then(res => {
                console.log(res.data);
                setState({
                    ...state,
                    movieById: res.data
                })
            })
            .catch(err => console.log(err))
    }
   
    return (
        <MoviesContext.Provider value={{ state, getPopularMovies, getMovieById }}>
            { props.children }
        </MoviesContext.Provider>
    )
}

export { ContextProvider, MoviesContext };