import { useState, useEffect, useRef } from "react";

function Ref() {
  const [inputValue, setInputValue] = useState("");
const inputElement=useRef()
  const count = useRef(0);


  useEffect(() => {
    count.current = count.current + 1;
  });

  let focusInput=()=>
    {
        inputElement.current.style.backgroundColor="red";
    }

  return (
    <>
      <input
        ref={inputElement}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <button onClick={focusInput}>Click Here</button>
      {console.log(inputElement)}
    </>
  )
  
 
}

export default Ref