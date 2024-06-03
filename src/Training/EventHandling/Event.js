import React from 'react'

const Event = () => {
    let handleClick=()=>{
          alert("You Clicked Me")
    }
  return (
    <div>
        <button onClick={handleClick}>

            Click Me
        </button>
    </div>
  )
}

export default Event