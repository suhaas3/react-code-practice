import React from 'react'

export default function MovieCard({name, age, Gender, Dob}) {
  // console.log(props.movieArray,'propsssssssssssss')
console.log(name,"user nameeeee")
console.log(age,"user ageeeeeeeeee")
  return (
    <div className='movie-card'>
      
      {/* <h2 className='movie-title'>{props.movieName} {props.year}</h2> */}
      {/* <h2 className='movie-duration'>{props.movie}</h2> */}

    {/* {props.movieArray.map((movie, index) => {
      return (
        <h3 key={index}>{movie} {index}</h3>
      )
    })} */}

    {/* <button onClick={props.onclick}> click here</button> */}

{/* Passing Jsx as props */}
{/* 
{props.title}
{props.icon} */}


{name}
{age}
{Gender}
{Dob}
    </div>
  )
}
