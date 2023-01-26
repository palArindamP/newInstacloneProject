
// import './App.css';

import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './components/landing/landing';
import Post from "./components/posting/posting";
import View from "./components/getview/getview";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Landing/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/view" element={<View/>}/>
     
    </Routes>
    </BrowserRouter>
       
 
  )
}

export default App;
