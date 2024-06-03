import React from 'react'

import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='d-flex justify-content-center gap-5 ' >
 
       <NavLink to={`/`}  className={({isActive,isPending})=>
        
       `text-decoration-none ${isActive?"active":isPending?"pending":""} ` 
     
    }  >
        Home
       </NavLink>
       
       <NavLink to={`/About`} className={({isActive,isPending})=>
        
       `text-decoration-none ${isActive?"active":isPending?"pending":""} ` 
     
    }  >
        About
       </NavLink>
       
       <NavLink to={`/contact`} className={({isActive,isPending})=>
        
       `text-decoration-none ${isActive?"active":isPending?"pending":""} ` 
     
    }   >
       Contact
       </NavLink>
       
        
    </div>
  )
}

export default Header