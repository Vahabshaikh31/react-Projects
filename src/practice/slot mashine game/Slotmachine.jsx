import React from 'react'

const SlotM =(props)=> {
//  let y= props.y ;
//  let z = props.z;
//  let x = props.x;

 let {x,y,z} = props;

  if((props.x === y ) && ( y === z)){
    return (
      <>
      <div className="slot_inner">
        <h1>
        {x} {y} {z} 
        </h1>
        <h2>
          This is maching 
        </h2>
      </div>
      </>
    )
  }
  else{
    return (
      <>
      <div className="slot_inner">
        <h1>
        {x} {y} {z} 
        </h1>
        <h2>
          This is not  maching 
        </h2>
      </div>
      </>
    )
  }
};
export  default SlotM;


// import SlotM from './slot mashine game/Slotmachine'
// export default function main() {
//   return (
//     <>
//       <h1 className='heading style'>
//         🎰 Welcome to<span style={ {fontWeight : 'bold' }}> Slot machine game</span> 🎰</h1>
//         <SlotM x="😄" y="😄" z="😄"/>
//         <SlotM x="😄" y=" 🎅 " z="😄"/>
//         <SlotM x="😄" y=" 🥽 " z="😄"/>
//     </>
//   )
// }
