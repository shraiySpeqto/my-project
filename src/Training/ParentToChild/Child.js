import React from 'react'

const Child = ({sendDataToParent}) => {

    let name="shraiy"
    function sendData(){
        sendDataToParent(name)
    }
  return (
    <div>

        <button onClick={sendData}>Click</button>
    </div>
  )
}

export default Child