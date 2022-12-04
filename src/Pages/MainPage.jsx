import React from 'react';
import "./mainpage.css"

import Home from "../Pages/Home";
import Showcase from "../Pages/Showcase";
import About from "./About";
import Contact from "./Contact";

<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
function MainPage() {


    return (
        <div>
            <section id='home' href="#home">
                <Home href="#home" />
            </section>
            <section id='showcase' href="#showcase">
                <Showcase href="#showcase" />
            </section>
            <section id='about' href="#about">
                <About href="#about" />
            </section>
            <section id='contact' href="#contact">
                <Contact href="#contact" />
            </section>
        </div>
    )
}

export default MainPage
