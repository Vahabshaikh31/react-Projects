import React from 'react'

const Events = () => {
    const [User, Setuser] = ("use");
    const [clr, Setclr] = ("purple");
    
    const click =() => {
         Setuser("red");
         Setclr("Click me");
    }

    return (
        <div style={ {background:clr } }>
            <button onClick={click}>{User}</button>
        </div>
    )
}

export default Events
