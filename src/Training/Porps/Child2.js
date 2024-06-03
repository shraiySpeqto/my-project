import React, { useContext } from 'react'
import { Context } from './Props'

const Child2 = () => {
    let {theme}=useContext(Context)
  return (
    <div>

        {theme}
    </div>
  )
}

export default Child2