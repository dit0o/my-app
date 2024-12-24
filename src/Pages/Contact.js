import React from "react";
import { useNavigate } from "react-router-dom";
const Contact=(()=>{
  const navigate=useNavigate()
  return(
    <>
<h1>
   Contact page
</h1>
<div className="contact-button">
  <button onClick={()=>navigate('info')}>Contact Info

  </button>
  <button onClick={()=>navigate('form')}>Contact Form</button>

</div>
    </>
  )


})
export default Contact