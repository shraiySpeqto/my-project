import React from 'react'

const ConditionalRendring = () => {
    let isLoggedIn=true
    let content
    if(isLoggedIn)
    {
      content="Hello"
    }
    else{
        content="bye"
    }
    
  return (
    <div>
      {content}
    </div>
  )
}

export default ConditionalRendring