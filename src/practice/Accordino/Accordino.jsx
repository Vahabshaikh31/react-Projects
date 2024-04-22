import React, { useState } from 'react'
import Data from './data'
import Printing from './Printing';

const Accordino = () => {
    const [data , setdata] = useState(Data);
    

  return (
    <div>
      <div> 
                    {
                    data.map((curElem)=>{
                      const {id} = curElem;
                       return <Printing
                       key = {id}
                      {...curElem}
                      />
                    })
                }
        </div>   <h1> </h1>
    </div>
  )
}

export default Accordino
