import React, { createContext } from 'react'
import Child from './Child'
import Child2 from './Child2';

export let Context=createContext("Light")
const Props = () => {

function getName(name)
{
console.log(name);
}



return (
<Context.Provider value={{theme:'dark',getName:getName}} >
    <Child ></Child>
    <Child2></Child2>
</Context.Provider>

    

)
}

export default Props