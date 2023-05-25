import React from 'react'
import "./header.css"
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <section className="header">
      <div className='nav-container'>
      <Navbar />
      </div>
      
    </section>
  )
}

export default Header