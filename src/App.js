import "./App.css";
import React from "react";
import Top from "./Header/Top";
import Home from "../src/Components/Home";
import Tourism from "../src/Components/Tourism";
import Fitness from "../src/Components/Fitness";
import Technology from "../src/Components/Technology";
import Food from "../src/Components/Food";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
     <Top/>
     <Routes>
     <Route path="/home"  element={<Home/>}/>
     <Route path="/tourism"  element={<Tourism/>}/>
     <Route path="/fitness"  element={<Fitness/>}/>
     <Route path="/technology"  element={<Technology/>}/>
     <Route path="/food"  element={<Food/>}/>
    
     </Routes>
     </Router>
    </div>
  );
}

export default App;