import React from 'react';
import Navbar from './NavbarComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Por from './PORComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

function Home () {
    return(
        <>
            <Navbar />
            <About />
            <Projects />
            <Por />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;