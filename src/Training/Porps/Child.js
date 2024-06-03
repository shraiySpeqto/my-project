import React, { useContext } from 'react'
import { Context } from './Props';
const Child = () => {
   let {theme,getName}=useContext(Context)
//    console.log(theme);
   let name="ketan"

  return (
    <div>
      {/* {theme} */}
      {getName(name)}
    </div>
  )
}

export default Child