import React from 'react'
import Child from './Child'

const Parent = () => {
    console.log("parent");
    function handleData(name)
    {
        console.log(name)
    }
  return (
    <div >
        <Child sendDataToParent={handleData}></Child>
    </div>
  )
}

export default Parent