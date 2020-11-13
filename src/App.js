import React, {useState} from 'react'

export default function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
     e.preventDefault()
   
  const url =`https://api.themoviedb.org/3/search/movie?api_key=4c3ad92dbbd8b98710480f66cb2e91bf&language=en-US&query=${query}&page=1&include_adult=false`   

  try{
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
    console.log(data)
  }catch(err) {
    console.log(err)
    } 
  }  
  return(
    <div>
      <form onSubmit={searchMovies}>
        <label htmlFor='query'>Movie Search</label>
        <input type='text' name='query' placeholder='i.e. Jurassic Park' value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

     <div>
       {movies.filter(movie => movie.poster_path).map(movie => (
        <div key={movie.id}>
         <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}/>
         <div>
          <h3>{movie.title}</h3>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
         </div>  
        </div>
       ))}
     </div>
    </div>
  )
}