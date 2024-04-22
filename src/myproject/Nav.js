import './Nav.css'
import Modal from './Modal'
export default function Nav() {
    return (
        <> 
<div className="page">
    <nav className="navbar">
        <div className="logo"><img src="https://static.vecteezy.com/system/resources/thumbnails/006/470/647/small/university-education-logo-design-template-free-vector.jpg" alt="" /></div>
        <div class="dropdown-menue">
      <span>Mouse over me</span>
             <div class="dropdown-content">
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
           </div>
           <span>Mouse over me</span>
             <div class="dropdown-content">
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
           </div><span>Mouse over me</span>
             <div class="dropdown-content">
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
           </div>   
        </div>
            <div className="buttons">
            <Modal/>
         </div>
        
    </nav>
 </div>
 </>
    )
}
