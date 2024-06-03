import React, { useState } from 'react'

const State = () => {
    let [count,setCount]=useState(0);
    let handleCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
          
          Count: {count}<br/>
          <button onClick={handleCount}>Increment</button>

    </div>
  )
}

export default State