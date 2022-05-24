import React,{useState} from 'react'

export default function Usestate() {

    const[Count,useCount]=useState(0);

     const Add=()=>{
        useCount(
          Count+1
        )
    }
  return (
    <div>
        <p>{Count}</p>
        <button onClick={Add}>click</button>
    </div>
  )
}
