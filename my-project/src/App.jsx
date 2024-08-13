import React from 'react'
import Login from './components/Login'
import Signup from'./components/Signup'
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    
  
    </>
    
  )
}

export default App
