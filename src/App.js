import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=246bb98b'




const App = () => {
  const [movies, setMovies] = useState([]);

  // fetch movies from Api OMDb
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }

  // call the SearchMovies
  useEffect(() => {
    searchMovies('attila')
  }, []);


  // App
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value="Batman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            <MovieCard movie1={movies[0]}/>
          </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
