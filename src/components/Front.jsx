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
                <div className='frontOverlay'></div>
                <video src={frontVideo} autoPlay loop muted />
                <div className='frontContent'>
                    <h2>Aleks Magnusson</h2>
                    <br />
                    <h4>Photographer | content creator | frontend dev student</h4>
                    <br />
                    <button> Dive into my adventure.</button>
                    <button> Contact me.</button>
                </div>
            </main>
            <footer className='footer'>

            </footer>
        </div>
    )
}

export default Front
