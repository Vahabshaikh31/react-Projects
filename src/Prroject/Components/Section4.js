import React from 'react'
import './Section4.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
export default function Section3() {
  return (
    <div>
       <section className="our-classes">
        <b className="our-classes1"> <div className='ourclass'>OUR CLASSES</div></b>
        <div className="fringilla-a-sed1">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </div>
        <img className="image1-1-icon" alt="" src={image1} />
        <img className="image2-1-icon" alt="" src={image2} />
        <img className="image3-1-icon" alt="" src={image3} />
      </section>
    </div>
  )
}
