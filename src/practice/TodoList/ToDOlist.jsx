import React, { useState } from 'react'
import Data from './Data';


const ToDOlist = () => {
    const [name,setName] = useState("");
    const [Item,setItem] = useState([]);

    const onchange = (e) =>{
      setName(e.target.value)
    } 
   
    const add = () =>{
        setItem((values)=>{
                return [...values,name]
            })
        setName("");
    }

    
    const clicked =(id)=> {
        setItem((val)=>{
           return val.filter((vals,index)=>{
                return index !== id;
            })
        })
        }

    return (
        <div className='Main'>
            <h1>To Do list</h1>
            <div>   
                <input type="text" placeholder='Write input her'
                value={name}
                onChange={onchange} 
                />
                <button onClick={add}> +</button>
                   
                    {
                    Item.map((e,index)=>{
                       return <Data 
                       key={index}
                       id ={index}
                      name={e}
                      onSelect={clicked}
                      />
                    })
                }
                </div>
        </div>
    )
}

export default ToDOlist
