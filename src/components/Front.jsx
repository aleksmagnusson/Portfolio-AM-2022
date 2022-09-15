import { Link } from "react-router-dom"
import frontVideo from '../assets/aleksEdit1.mp4'
import { useState } from 'react'
import '../components/front.css'
import Navbar from './Navbar'

function Front() {
    const [count, setCount] = useState(0)

    return (
        <div className='frontpage'>
            <main>
                <Navbar />
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
            </main>
        </div>
    )
}

export default Front;
