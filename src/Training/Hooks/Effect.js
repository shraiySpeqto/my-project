import React, { useEffect, useState } from 'react'

const Effect = () => {
 
    let [count,setCount]=useState(0)

    let handleDecre=()=>{
       console.log("clicked");
    }

    let handleIncre=()=>{
        setCount(count+1)
    }
    
    useEffect(() => {

            console.log("component mounted");
       
    },[count]);
  return (
    <div>
        {count}
       <button onClick={handleDecre}>Decre</button>
       <button onClick={handleIncre}>Incre</button>
    </div>
  )
}

export default Effect