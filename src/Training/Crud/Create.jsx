import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Create.css";
import axios from "axios";
import Read from "./Read";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
let obj
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
let navigate=useNavigate()
const [arr,setArr]=useState([])
  let handleName=(e)=>{
     setName(e.target.value)
  }
  let handleEmail=(e)=>{
    setEmail(e.target.value)
  }

  obj = {
    name: name,
    email: email,
  };

  useEffect(()=>{
    console.log(arr);
  },[arr])

  let handleSubmit = (e) => {
   

    e.preventDefault()

    setArr((prevArr) => [...prevArr, obj])

  
    if(check)
        {
        
           let existingUser=JSON.parse(localStorage.getItem("Users")) || []
           existingUser.push(obj)
           localStorage.setItem("Detail",JSON.stringify(obj))
           
        axios.post("https://crudcrud.com/api/80ad511808824f3b8cc6b10d133c6ac4/user",obj)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
           console.log(err);
        })

        }else{
            alert("Please Check it ")
        }

  }
  

  let handleCheckBox = (e) => {
    setCheck(!check);
  };
  return (
    <>
    <div className="d-flex justify-content-center align-items-center container flex-column">
    <Button onClick={()=>navigate('/Read')} className="text-center">Read</Button>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={handleName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={handleEmail} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onClick={handleCheckBox}
            value={check}
            
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};

export default Create;
