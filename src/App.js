import "./App.css";
import React from "react";
import Top from "./Header/Top";
import Home from "../src/Components/Home";
import Tourism from "../src/Components/Tourism";
import Fitness from "../src/Components/Fitness";
import Technology from "../src/Components/Technology";
import Food from "../src/Components/Food";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DataState from "./Context/DataState";
import Article from "./Components/Article";


function App() {
  return (
    <>
    <DataState>
    <div className="App">
     <Router>
     <Top/>
     <Routes>
     <Route exact path="/"  element={<Home/>}/>
     <Route exact path="/tourism"  element={<Tourism/>}/>
     <Route exact path="/fitness"  element={<Fitness/>}/>
     <Route exact path="/technology"  element={<Technology/>}/>
     <Route exact path="/food"  element={<Food/>}/>
     <Route exact path="/article/:id" element={<Article/>} />
    
     </Routes>
     </Router>
    </div>
    </DataState>
    </>
  );
}

export default App;
