import React from "react"
// import * as bootstrap from 'bootstrap';
import './styles.css'
import './js/scripts'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Projects from "./Projects"
import Contact from './Contact'
import Footer from './Footer'


const App = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;