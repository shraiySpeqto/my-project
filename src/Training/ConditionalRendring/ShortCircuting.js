import React from 'react'

const ShortCircuting = () => {
    let loggedin=true
  return (
    <div>{loggedin && "Hello"}</div>
  )
}

export default ShortCircuting