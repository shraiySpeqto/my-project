import React, { useState } from "react";

const Output = () => {
  let [input, setInput] = useState("");
  let [click,setClick]=useState(false)
  function handleChange(e) {
    setInput(e.target.value);
  }
  let handleClick = () => {
    // alert(input);
    setClick(!click)
    setInput(input);
  };

  return (
    <div>
      <label>Enter Your name</label><br></br>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>click</button>
      <div>
      {click? `your name is ${input}`: ""}
      </div>
    </div>
  );
};

export default Output;
