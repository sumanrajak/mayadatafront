import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import home from "./images/Vector (3).png"
import about from "./images/Vector (4).png"
import menu from "./images/menu.png"


function App() {
const [ishome, setishome] = useState(true)
  return (
    <div className="app">
       <Router>
      <div className="sidebar">
        <div className="sidetab2"> <img src={menu} ></img> <div className="sidehed"> 1806261</div></div>
        <Link to="/" style={{color:"white",textDecoration:"none"}}><div className={ ishome ? " sidetab ative":"sidetab"} onClick={()=>setishome(true)}>  <div className=""><img src={home} ></img></div> <div className="sidetitl">Home</div> </div></Link>
        <Link to="/aboutme" style={{color:"white",textDecoration:"none"}}><div className= {!ishome ? " sidetab ative":"sidetab"} onClick={()=>setishome(false)}>  <div className=""> <img src={about} ></img></div> <div className="sidetitl">About Me</div></div></Link>
      </div>
      <div className="rendercmp">
     
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/aboutme" component={Aboutme}></Route>
      
      </div>
      </Router>
      

    </div>
  );
}

export default App;
