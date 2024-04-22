import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Clock from 'react-digital-clock';
const IncrementDecrement = () => {
    const [Number, setNumber] = useState(0);
    const inc =()=>{
        setNumber(Number+1)
    }
    const dec =()=>{
        if(Number > 0 ){
        setNumber(Number-1)
        }else{
            alert('Zero in not valid')
        }
    }
  return (
    <div>
      <h1>{Number}</h1>
      <button onClick={inc}><AddIcon/></button>
      <button onClick={dec}> <RemoveIcon/> </button>
      <Clock/>
    </div>
  )
}

export default IncrementDecrement
