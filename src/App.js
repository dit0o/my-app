import React, { createElement } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider}from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/contactForm";


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