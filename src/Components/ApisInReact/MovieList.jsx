import React, { useState } from 'react'

export default function MovieList() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [showTimes, setShowtimes] = useState({});

  const loadMovies = () => {
    setIsLoading(true)
    setTimeout(() => {
        const sampleMovies = [
      {id:1,title:"avengers"},
      {id:2, title:"titanic"}
    ]

    setMovies(sampleMovies);
    setIsLoading(false);
    },5000)
  
  }

  const loadShowTimed = (movieId) => {
    setIsLoading(true)

    const sampleShowTimes = [
      "10:00 AM",
      "2:00 PM",
      "6:00 PM"
    ]

    setShowtimes(prev => ({
      ...prev,
      [movieId]: sampleShowTimes
    }))

    setIsLoading(false)
  }

  console.log(showTimes,"show timessssss")
  return (
    <div>
      <h1>my movie list </h1>
      <button onClick={loadMovies}>{isLoading ? "Loading..." : "Load Movies"}</button>

      {movies.length > 0 && movies.map(movie => {
        return (
        <>
        <li key={movie.id}>{movie.title}</li>

            <button onClick={() => loadShowTimed(movie.id)}>show times</button>

            {showTimes[movie.id] && (
              <ul>
                {showTimes[movie.id].map((time, index) => {
                  return (
                  <li key={index}>{time}</li>
                  )
                })}
              </ul>
            )}
   
   </>
        )
      })}
    </div>
  )
}
