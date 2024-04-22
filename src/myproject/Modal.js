import React, { useState } from "react";
// import Model1 from './Model1'
import Log from './Log'
// import './Modal.css'

const Modal = () =>  {
    const [showModal,setmodel] = useState(false);
  const click = () => setmodel(false);
  const close = () => setmodel(true);
    return(
        <>
        <button onClick={() => setmodel(true)} className="button"> Log in And Sign Up </button>
        {showModal && <Log  classmodel={click} />  } 
<br />
<br /> 
        
        </>
    );
};
export default Modal;
