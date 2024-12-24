import React, { createElement } from "react";

import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider}from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/contactForm";
import NotFound from "./Components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./Pages/Jobs";
import JobDetailes from "./Components/JobDetailes";


const App=(()=>{
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      <Route path="products" element={<Product/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactLayout/>}>

      <Route path="info" element={<ContactInfo/>}/>
      <Route path="form" element={<ContactForm/>}/>
</Route>
<Route path="jobs" element={<JobsLayout/>}>
  <Route index element={<Jobs/>} loader={jobsLoader}/>
  <Route path=":id" element={<JobDetailes/>} loader={<JobDetailes/>} errorElement={<Error/>}/>
</Route>

<Route path="*" element={<NotFound/>}/> 
      </Route>
    )
  )
  return(
    <>
    
    <RouterProvider router={router}/>
    
    </>
  )


})
export default App