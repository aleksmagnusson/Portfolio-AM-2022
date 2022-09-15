import { Link, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import frontVideo from '../assets/aleksEdit1.mp4'
import { useState } from 'react'
import '../components/front.css'
import Navbar from './Navbar'
import Showcase from "./Pages/Showcase"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Home from "./Pages/Home"

function Front() {
    const [count, setCount] = useState(0)

    return (
        <main>
            <div className='frontpage'>
                <>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/showcase" component={Showcase} />
                        </Routes>
                    </Router>
                </>
                <div className='frontOverlay'>
                    <video src={frontVideo} autoPlay loop muted />
                    <div className='frontContent'>
                        <h2>Aleks Magnusson</h2>
                        <br />
                        <h4>Photographer | content creator | frontend dev student</h4>
                        <br />
                        <button as={Link} to="#"> Dive into my adventure.</button>
                        <button> Contact me.</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Front;
