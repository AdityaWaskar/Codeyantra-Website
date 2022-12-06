import React from 'react'
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'
import './about.css'

const About = () => {
  return (
    <>
        <Navigation page = {'about'}/>
        <div className="about_container">
            About Us
        </div>
        <Footer/>
    </>
  )
}

export default About