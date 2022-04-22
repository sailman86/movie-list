import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=246bb98b'



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState('');

  // fetch movies from Api OMDb
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }

  // call the SearchMovies
  useEffect(() => {
    searchMovies('bat')
  }, []);


  // App
  return (
    <div className='app'>

      <div className='banner'>
        <div className='container'>
          <h1>MovieLand</h1>
        </div>
      </div>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchterm)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container2'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) :
        (
          <div className='empty'>
            <h2>NO movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
