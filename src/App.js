import React, {useState} from 'react'

export default function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async(e) => {
     e.preventDefault()
   
  const url =`https://api.themoviedb.org/3/search/movie?api_key=4c3ad92dbbd8b98710480f66cb2e91bf&language=en-US&query=${query}&page=1&include_adult=false`   

  try{
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }catch(err) {
    console.log(err)
    } 
  }  
  return(
    <>
      <form>
        <label htmlFor='query'>Movie Search</label>
        <input type='text' name='query' placeholder='i.e. Jurassic Park' value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

     <div>
       <h3></h3>
       <p></p>
       <p></p>
       <p></p>
     </div>

    </>
  )

}