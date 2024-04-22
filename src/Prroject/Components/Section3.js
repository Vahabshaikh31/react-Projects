import React from 'react'
import  './Section3.css'
import benefitpage from './benefitpage.png'

export default function Section3() {
  return (
    <div>
      <section className='main'>
        <div className="learn">THE BEST WAY TO LEARN</div>
        <div className="wayto">We help our students with equipments, teachers and classes
         to get you to your ultimate college goals with ease.
       <br />  We provide true care into each and every member.</div>

         <div className="mainbox">
         <div className="box1">
           <div className="title">This is the Title 1 </div> 
      <div className="title1"> Eu ipsum id egestas risus tempus</div> 
       <div className="title2">   enim semper felis quis.Nec </div>
        <div className="title3"> consectetur ac venenatis facilisi est. </div> 
         <div className="title4">Eget ac turpis id.</div> 
         <div className="learn1"> Learn More</div>
         </div> 
     </div>
     
     <div className="mainbox-1">
         <div className="box1">
           <div className="title">This is the Title 1 </div> 
      <div className="title1"> Eu ipsum id egestas risus tempus</div> 
       <div className="title2">   enim semper felis quis.Nec </div>
        <div className="title3"> consectetur ac venenatis facilisi est. </div> 
         <div className="title4">Eget ac turpis id.</div> 
         <div className="learn1"> Learn More</div>
         </div>
     </div>
     <div className="mainbox-2">
         <div className="box1">
           <div className="title">This is the Title 1 </div> 
      <div className="title1"> Eu ipsum id egestas risus tempus</div> 
       <div className="title2">   enim semper felis quis.Nec </div>
        <div className="title3"> consectetur ac venenatis facilisi est. </div> 
         <div className="title4">Eget ac turpis id.</div> 
         <div className="learn1"> Learn More</div>
         </div>
     </div>
     <div className="logo-1">
        <img className='logo-1-' src={benefitpage} alt="" />
     </div>
     <div className="font-1"><h1>THOUSANDS OF STUDENTS ARE <div className='happy'>HAPPY</div></h1></div>
     <div className="font-2">Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus.
      Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.</div>
      <div className="font-3">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi.
       Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</div>
      </section>
    </div>
  )
}

