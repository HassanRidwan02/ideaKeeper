import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar/index'
import Home from './components/Home'
import Button from './components/Button'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar>
          <Navbar.Logo>
            <Link to='/'>
              IdeaKeeper
            </Link>
          </Navbar.Logo>
          <Navbar.About>
            <ul>
              <li>
                <NavLink to='/about'>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </Navbar.About>
          <Navbar.CTA>
            <Button>Get Started</Button>
          </Navbar.CTA>
        </Navbar>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>



  )
}

export default App
