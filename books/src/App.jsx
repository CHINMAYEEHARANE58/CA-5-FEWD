// importing modules and components
import React from 'react'
import './App.css'
import {Route,Routes, BrowserRouter} from "react-router-dom"
import Mainpage from './Components/Mainpage'
import Form  from './Components/Form'

function App() {
  // routing using BrowserRouter
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/register' element={<Form/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
