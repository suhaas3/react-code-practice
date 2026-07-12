import React, { useEffect, useState } from "react";
import axios from "axios";

function ApisInReact() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // // Fetch with Promise constructor
  // const fetchMoviesPromise = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await new Promise((resolve) =>
  //       setTimeout(() => resolve([
  //         { id: "m1", title: "Salaar" },
  //         { id: "m2", title: "Pushpa 2" },
  //       ]), 1000)
  //     );
  //     setMovies(response);
  //   } catch (error) {
  //     console.error("Promise error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchMoviesPromise();
  // },[])

  // console.log("startttttttttt")
  // const promise = new Promise(() => {
  //   // setTimeout(() =>{
  //     console.log("inside settimeOut");
  //   // },1000)
  // })

  // console.log("enddddddddd")

  // const [marks,setMarks] = useState()
  // const [result, setResult] = useState();

  // async function practicePromise() {

  //   const promise = await new Promise((resolve, reject) => {
  //     let marks = 40;

  //     if (marks >= 35) {
  //       resolve(setMarks(marks))
  //       setResult("passssss")
  //     }
  //     else {
  //       reject(setMarks(marks))
  //       setResult("faileddddddddd")
  //     }
  //   })
  // }

  // useEffect(() => {
  //   practicePromise()
  // }, [])

  
  // Fetch with Axios from mock API
  const fetchMoviesAxios = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/postslllllllll?_limit=2");
      // const movieData = response.data.map((post) => ({
      //   id: post.id,
      //   title: post.title,
      // }));
      setMovies(response.data);
      console.log(response.data,"inside functionnnnnnn")
      setLoading(false);
    } catch (error) {
      console.error("Axios error:", error);
    } 
  };

  useEffect(() =>{
    fetchMoviesAxios()
  },[])

    if (loading) {
    return <h2>Loading...</h2>;
  }





  return (
    <>
      {/* <h1>{movies}</h1>
      {console.log(movies,"moviesssssssssss")} */}
{/* 
      {marks}
      {result} */}

{movies.length > 0 && movies.map((movie, index) => {
  return (
    <>
    <h1 key={index}>{movie.title}</h1>
    </>
  )
})}

    </>
  )
}

export default ApisInReact;