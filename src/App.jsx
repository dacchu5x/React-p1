import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react"
import Home from "./Home"
import Search from "./Search"
import Cat from "./Cat"
import Movie from "./Movie"
import Tv from "./Tv"
import Profile from "./Profile"
import Login from "./Login"
import Layout from "./Layout";
import Editprofile from "./Editprofile";
const App = () => {
  return (
    <>


    <Routes>

<Route path="/" element={<Login/>}/>

<Route element={<Layout />}>
<Route path="/home" element={<Home/>}/>
<Route path="/movie" element={<Movie/>}/>
<Route path="/tv" element={<Tv/>}/>
<Route path="/Profile" element={<Profile/>}/>
<Route path="/Catageroy" element={<Cat/>}/>
<Route path="/search" element={<Search/>}/>
<Route path="/editprofile" element={<Editprofile/>}/>
</Route>
</Routes>

    </>
  )
}

export default App


