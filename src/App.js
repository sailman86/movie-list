import React from 'react';
import { useEffect } from 'react';
import './App.css';
import './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=246bb98b'

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data)
  }

  useEffect(() => {
    searchMovies('batman')
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value="Batman"
          onChiange={() => {}}/>
      </div>
    </div>
  );
}

export default App;
