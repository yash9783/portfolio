import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <section className='container'>
            <div className='row'>
                <div className='col-md-5'>
                    <h1 className='display-7 my-5'>I'm Web Developer<br/>Yash Jhalani</h1>
                    <p className='lead'>
                      I am Yash Jhalani. I am currently pursuing my B.tech from Chandigarh University in Computer Science and Engineering I am graduate in June 2024 from Chandigarh University.
                    </p>
                    <NavLink className='btn btn-outline-dark mx-2 get' to="/contact">Get Started</NavLink>
                    <NavLink className='btn btn-outline-dark mx-2 get' to="/about">More About Me</NavLink>
                </div>

                <div className='image'>
                  <div className='row'>
                    <img src='/assests/images/portfolio.jpg' alt='Yash Jhalani' />
                  </div>
                </div>
            </div>
        </section>
        <About/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home