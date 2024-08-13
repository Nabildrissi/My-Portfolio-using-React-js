import React from 'react'
import Header from './Compenents/Header/Header'
import Nav from './Compenents/Nav/Nav'
import About from './Compenents/About/About'
import Experience from './Compenents/Experience/Experience'
import Services from './Compenents/Services/Services'
import Portfolio from './Compenents/Portfolio/Portfolio'
import Testmonials from './Compenents/Testmonials/Testmonials'
import Contact from './Compenents/Contact/Contact'
import Footer from './Compenents/Footer/Footer'
import Navbar from './Compenents/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
