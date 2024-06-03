import React, { useState } from 'react'

const Input = () => {
    let [input , setInput]=useState("")
    function handleChange(e)
    {
        setInput(e.target.value)
    }
    let handleClick=()=>{
      
       
        alert(input)
    }
  return (
    <div>

       <input type='text' value={input} onChange={handleChange} />
       <button onClick={handleClick}>Click</button>

    </div>
  )
}

export default Input