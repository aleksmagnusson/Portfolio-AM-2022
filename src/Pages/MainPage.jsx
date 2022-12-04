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
            <section id='home'>
                <Home />
            </section>
            <section id='showcase'>
                <Showcase />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </div>
    )
}

export default MainPage
