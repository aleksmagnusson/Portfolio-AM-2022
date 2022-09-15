import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Front from './components/Front'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Front />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
