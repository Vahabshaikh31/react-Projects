import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {

  return (
    <div>
          <div className="navbar">
        <div className="logo">
          {/* <b className="join-button1">EDULIFE</b> */}
          {/* <div className="logo-child" /> */}
        </div>
        <div className="elements">
        <div className="home">Home
        </div>
        <div className="advantages1">About Us-</div>
        <div className="dropdown" >
          <span>Cources</span>
            <div className="dropdown-content">
              <a href="/dropdown-item-1">Dropdown Item 1</a>
              <a href="/dropdown-item-2">Dropdown Item 2</a>
              <a href="/dropdown-item-3">Dropdown Item 3</a>
            </div></div>
            
        <div className="contact1">Contact</div>
        <div className="sign-in">Sign In</div>
        </div>
        <button className="member-buton">
          <div className="member-buton-child" />
          <div className="become-a-member">Become a Member</div>
        </button></div>
      </div>
  )
}
