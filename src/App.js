import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sign_in from './Authentication/Sign_In/Sign_in'
import Sign_Up from './Authentication/Sign_Up/Sign_Up'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element ={<Sign_in />}/>
        <Route path='/signup' element ={<Sign_Up />}></Route>
      </Routes>
    </Router>
 
  )
}

export default App