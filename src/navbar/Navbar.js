import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div class="navbar">
      <a>
        <Link to="/">Home</Link>
      </a>
      <a>
        <Link to="/contact">Contact</Link>
      </a>
      <a>
        <Link to="/service">service</Link>
      </a>
      <a>
        <Link to="/booking">Booking</Link>
      </a>
    </div>
  )
}
