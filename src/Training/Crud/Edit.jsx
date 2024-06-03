
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Create.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Edit = () => {

const navigate=useNavigate()

let [name,setName]=useState("")
let [email,setEmail]=useState("")
let [id,setId]=useState(0)
const [check, setCheck] = useState(false);


useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
},[])

let handleCheck = (e) => {
    setCheck(!check);
  };

  let handleUpdate=(e)=>{
    e.preventDefault()
  
    axios.put(`https://crudcrud.com/api/80ad511808824f3b8cc6b10d133c6ac4/user/${id}`,{
        name:name,
        email:email
    }).then(()=>{
       navigate('/read')
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  return (
    <div className="d-flex justify-content-center align-items-center container">
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name"  value={name} onChange={(e)=>setName(e.target.value)}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onClick={handleCheck}
            value={check}
            
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Edit