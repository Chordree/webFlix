import './App.css';
import { useState, useEffect } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

// const API_URL = ''
const APIKEY = 'd92fff71be105c6ed9d1e3b5232230cf'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?&api_key=' +  APIKEY
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=' + APIKEY + '&query='
// const IMG_PATH = 'https://image.tmdb.org/t/p/w500'  //w1280 also works

function App() {
  
  const [movies, setMovies] = useState([])
  const [searchWord, setSearchWord] = useState('')

  const searchMovies = async (title='') => {
     // const response = await fetch(`${API_URL}&query=${title})
    let response;
    // just a tenary to load home page if no search input
    title ? response = await fetch(SEARCHAPI + title) :
    response = await fetch(API_URL)
   
    // see if the use of let here is a bad practice 

    const data = await response.json()
    // console.log(data);
    console.log(data.results);
    setMovies(data.results)
    // study why i ran into an infinit loop when..
    // search movies was used in the below
    // console.log(data.search); //if using omdb
    
  }

  useEffect(()=>{
    searchMovies()
  }, [])


  return (
    <div className="app">
      <h1> WEBFLIX</h1>
      <div className='search'>
        <input type="text" placeholder='enter movie keyword' 
          value={searchWord} onChange={(e)=>{setSearchWord(e.target.value)}}/>
        <img src={searchIcon} alt="searchIcon logo" 
          onClick={()=>{searchMovies(searchWord)}}/>
      </div>
      {
        movies.length > 0 ?
        (
          <div className='container'> 
            {movies.map((movie)=>(
              <MovieCard sampMov={movie}/>
            ))}
          </div>
        ):
        (
          <div>
            <h2> There are no Movies found for your search input</h2>
          </div>
        )
      }
      <div className='container'> 
            {movies.map((movie)=>{
              <MovieCard sampMov={movie}/>
            })}
      </div>
    </div>
  ); 
}

// see use of map in a normal js code

export default App;
