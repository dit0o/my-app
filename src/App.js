import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {Routes,Route}from "react-router-dom";

const App=(()=>{
  return(
    <>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    </div>
    
    </>
  )


})
export default App