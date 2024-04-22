import React from 'react'
import './Section1.css'
import homepage from './homepage.png'
import { Button,} from "@mui/material";

export default function Section1() {
  return (
    <div>
 <section className="hero">
        <div className="her-text">
          <h1 className="edulife">EDULIFE</h1>
          <h1 className="edulife1">EDULIFE</h1>
          <h1 className="new-way-to">new way to learn</h1>
          <div className="edulife-helps-students">
             Edulife helps students to achieve their goals with the easist and
            the cheapest way. If you want to be part of this family. You can
            contact with us.
          </div>
        </div>
        <div className="action-buttons">
          <Button
            className="join-button1"
            sx={{ width: 201 }}
            color="primary"
            variant="outlined"
          >
            Join Now
          </Button>
          <div className="learn-more3">Learn more</div>
        </div>
        <img className="homepage-1-icon" alt="" src={homepage} /> 
      </section> 
    </div>
  )
}
