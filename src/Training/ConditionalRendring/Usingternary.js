import React, { useState } from 'react'

const Usingternary = () => {
    let [bool ,setBool]=useState(true)
  return (
    <div>
        <button onClick={()=>setBool(!bool)}>
            {bool?"Hello":"Bye"}
       </button>
       
    </div>
  )
}

export default Usingternary