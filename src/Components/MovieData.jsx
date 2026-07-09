import React from 'react'
import MovieCard from './MovieCard'

export default function MovieData() {

const movie="Game changer"
const year = 2024 

const movieArray = ['Devara','puspa','game changer','rajasaab']

function showAlert() {
  alert("clicked whooo")
  console.log("clickeddddddddd")
}

const user = {
  "name":"devara",
  "age": 40,
  "Gender":"Male",
  "Dob": 1986
}
  return (
    <>
    {/* <MovieCard movieName={movie} year={year} /> */}
      {/* <MovieCard movie={`${movie}  ${year}`}/> */}

      {/* <MovieCard movieArray={movieArray}/> */}

      {/* <MovieCard onclick={showAlert}/> */}

      {/*Passing Jsx as props */}
      {/* <MovieCard title="react" icon={<span>🔥</span>}/> */}

      {/* <MovieCard>
        <h1>ready to react immediatly</h1>
        <h1>register here</h1>
      </MovieCard> */}

{/* <MovieCard user={user.name} age={user.age} gender={user.Gender} dob={user.Dob} /> */}
{/* Above line is Equal to below Line of code*/}
<MovieCard {...user}/>
    </>
  )
}
