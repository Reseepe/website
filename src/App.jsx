import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'


function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
    </Routes>
  )
}

export default App
