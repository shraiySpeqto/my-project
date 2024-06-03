import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Read = () => {
  const navigate=useNavigate()

  const [userData,setUserData]=useState([])

  function getData(){
    axios.get("https://crudcrud.com/api/80ad511808824f3b8cc6b10d133c6ac4/user")
    .then((res)=>{
         setUserData(res.data)
    })

  }

  useEffect(()=>{
   getData()
  },[])

  function handleDelete(id){
     axios.delete(`https://crudcrud.com/api/80ad511808824f3b8cc6b10d133c6ac4/user/${id}`)
     .then(()=>{
      getData()
     })
  }
  console.log(userData);

function handleEdit(id,name,email)
{
  localStorage.setItem("id",id)
  localStorage.setItem("name",name)
  localStorage.setItem("email",email)
}

  return (
    <div>
        <ul className='list-unstyled'>
         {
          userData.map(data=>
            <>
            <li key={data._id} >
              {data.name}
              {data.email}

            </li>
            <Link to={'/Edit'}>
            <Button variant="primary"  onClick={()=>handleEdit(data._id,data.name,data.email)}>
              Edit
            </Button>
            </Link>
           
            <Button variant="danger" onClick={()=>handleDelete(data._id)}>
              Delete
            </Button>
            </>
          )
         }
        </ul>
    </div>
  )
}

export default Read