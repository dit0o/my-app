import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetailes = () => {
   const JobDetailes=useLoaderData()

  return (
    <div>
      <p>
        <b>Job Deatailes</b>{JobDetailes.title}
      </p>
    </div>
  )
}

export default JobDetailes
export const JobDetailesLoader=async(params)=>{
const {id}=params;
const res=await fetch("http://localhost:5000/jobs" +id)
return res.json()
}