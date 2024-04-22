import React from 'react'

const Data = (props) => {

  return (
    <>
    <ol><button onClick={()=>{
        props.onSelect(props.id);
    }}> X</button>{props.name}</ol>
    </>
  )
}

export default Data
