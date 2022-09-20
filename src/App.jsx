import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Front from './components/Front'
import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Router>
          <Routes>
            <Route path="/front" element={<Front />} />
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
