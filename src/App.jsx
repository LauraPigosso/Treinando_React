import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './assets/Pages/Detail'
import Home from './assets/Pages/Home'
import React from 'react'
import Error from './assets/Pages/Error'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movie/:mID' element ={<Detail/>}></Route>
    </Routes>
          
    </BrowserRouter>

  
  )
}

export default App
