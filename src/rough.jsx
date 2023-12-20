
// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const name = 'same'
//   const time = 'nigh'
//   const chk = false
//   const [count, setCount] = useState(0)
  
//   function red(){
//     // setCount( count - 1)
//     // setCount(( )=> count - 1)
//     setCount((prev)=> prev - 1)
//     // setCount((prev)=> prev - 1)
//     // notice the major diff with the three methods above
//   }

//   useEffect(()=>{
//     // alert('new loading')
//     setCount(100)
//   },[])

//   return (
//     <div className="App">
//       <button onClick={red}>-</button>
//       <h2>{count}</h2>
//       <button  onClick={()=>setCount(count + 1 )}>+</button>
//       <h1> hello User, {time==='night'?'day':'other'}</h1>
//       <Person name = 'sam'/>
//       <Person sec='turn' name = {109} />
//       <Person/>
//     </div>
//   ); 
// }


// function Person({name='dill', sec}) {
//   return(
//       <div>
//         <h1> Name: {name} </h1>
//         <h2>Surname: {sec}</h2>
//         <h3>Age: 15</h3>
//       </div>
//   )
  
// }


// export default App;

// const searchWord = search.value;

// if (searchWord){
//     results(SEARCHAPI + searchWord)

image.src = IMG_PATH + element.poster_path

const APIKEY = 'd92fff71be105c6ed9d1e3b5232230cf'

const APILINK = 'https://api.themoviedb.org/3/discover/movie?&api_key=' +  APIKEY
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'  //w1280 also works
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=' + APIKEY + '&query='

//note the use of data.results

// the sample obj used for test
//   const sampMov = {
//     "adult": false,
//     "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
//     "genre_ids": [
//         18,
//         36
//     ],
//     "id": 872585,
//     "original_language": "en",
//     "original_title": "Oppenheimer",
//     "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
//     "popularity": 2038.895,
//     "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
//     "release_date": "2023-07-19",
//     "title": "Oppenheimer",
//     "video": false,
//     "vote_average": 8.2,
//     "vote_count": 4929,
//     // "poster_path": "N/A",
//     // see what poster path for a non image displays
//     // checkout the movie oppenheimer
// }