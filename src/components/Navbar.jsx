import { useState } from 'react'
import '../components/navbar.css'
import theme from './theme'

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <body>
            <nav className='navbar'>
                <ul className='navbar-nav'>

                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon=""></svg>
                            <span className='link-text'>Home</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon=""></svg>
                            <span className='link-text'>About</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon=""></svg>
                            <span className='link-text'>Projects</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon=""></svg>
                            <span className='link-text'>Portfolio</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon=""></svg>
                            <span className='link-text'>Contact</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </body>
    )
}

export default Navbar