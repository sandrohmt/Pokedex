import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import InfoPokemon from './components/InfoPokemon'

function App() {

  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<InfoPokemon />} />
      </Routes>
    </Router>
  
  )
}

export default App
