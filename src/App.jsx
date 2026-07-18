import { Routes, Route } from "react-router-dom";
import ProductCard from './Components/AmazonExample/ProductCard'
import ApisInReact from './Components/ApisInReact/ApisInReact'
import AuthenticationApi from './Components/ApisInReact/AuthenticationApi'
import MovieList from './Components/ApisInReact/MovieList'
import EventsInReact from './Components/EventsInReact/EventsInReact'
import LifeCyclePhases from './Components/LifeCyclePhases/LifeCyclePhases'
import MovieData from './Components/MovieData'
import Navbar from './Components/Navbar/Navbar'
import ReactHooks from './Components/StateExamples/ReactHooks'
import Home from "./Components/Home/Home";

function App() {


  return (
    <>
      {/* <MovieData/> */}
      {/* <ProductCard/> */}

      {/* <ReactHooks/> */}

      {/* <EventsInReact/> */}

      {/* <ApisInReact/> */}

      {/* <MovieList/> */}

      {/* <AuthenticationApi /> */}
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<LifeCyclePhases/>} />
      </Routes>

    </>
  )
}

export default App
