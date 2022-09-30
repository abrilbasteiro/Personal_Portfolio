import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
    </>
  );
}

export default App;
