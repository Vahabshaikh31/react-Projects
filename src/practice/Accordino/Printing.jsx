import React, { useState } from 'react'

const Printing = (props) => {
    const [show,setShow] = useState(false)
    const shows =()=>{
        if(show){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
  return (
    <div>
        
      {/* <button > +</button> */}
            <h1> <button onClick={shows }>{show ? <h4>➖</h4> : <h4>➕</h4>} </button>{props.qushions}</h1>
                
                { show && <h4>{props.answers}</h4>}
            
    </div>
  )
}

export default Printing
