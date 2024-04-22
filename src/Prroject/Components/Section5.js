import React from 'react'
import Con from './contactus.png'
import './Section5.css'
export default function Section4() {
  return (
    <div>
       <section className="homepage-item" />
      <div className="contact">
        <h2 className="be-a-member-container">
          <span>BE A MEMBER</span>
          <span className="to-achieve-your"> TO ACHIEVE YOUR GOAL</span>
        </h2>
        <div className="congue-adipiscing-risus">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </div>
        <div className="contact-image">
           <h1 className='edu'>EDULIFE</h1>
          <img className="contactus-1-icon" alt="" src={Con} />
        </div>
        <div className="email-box">
          <div className="email-box-child" />
          <div className="email">EMAIL</div>
        </div>
        <div className="name-box">
          <div className="email-box-child" />
          <div className="email">NAME</div>
        </div>
        <div className="message-box">
          <div className="message-box-child" />
          <div className="message">MESSAGE</div>
        </div>
        <div className="send-button">
          <div className="send-button-child" />
          <div className="send">SEND</div>
        </div>
      </div>
    </div>
  )
}
