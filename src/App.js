import React, { createElement } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider}from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App=(()=>{
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      <Route path="products" element={<Product/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>

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