import React from 'react'

import { NavLink,replace,useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    return (
        <div className='navbar'>
             
            <ul>
               <NavLink to={"/"}><li>Home</li></NavLink> 
               <NavLink to={"/about"}><li>About</li></NavLink> 
               <NavLink to={"/products"}><li>Product</li></NavLink> 
               <NavLink to={"/contact"}><li>Contact</li></NavLink> 
               <NavLink to={"/Jobs"}><li>Jobs</li></NavLink> 

            </ul>
            <button onClick={()=>navigate('/about',{replace:true})}>Get Started</button>
        </div>
    )
}

export default Navbar