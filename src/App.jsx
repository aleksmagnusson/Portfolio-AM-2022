import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Front from './components/Front'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/front" element={<Front />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
