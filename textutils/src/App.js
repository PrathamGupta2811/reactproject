import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light mode");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
     setAlert({
         msg: message,
         type: type  
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);     
  }

  const toggleMode =()=>{
    if(mode==='light mode')
    {
       setMode('dark mode');
       document.body.style.backgroundColor='grey';
       showAlert("Dark Mode has been enabled","success");
       document.title='TextUtil-DarkMode';
       setInterval(() => {
        document.title='TextUtil is amazing';
       }, 2000);
       setInterval(() => {
        document.title='Install anti zika virus';
       }, 2500);
    }
    else
    {
       setMode('light mode');
       document.body.style.backgroundColor='white';
       showAlert("Light Mode has been enabled","success");
       document.title='TextUtil-LightMode';
    }
  }
  return (

       <Router>
       <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
       <Routes>
          <Route path='/about'  element={<About/>}/>
          <Route path='/' element={<TextForms showAlert={showAlert} heading="Enter the text below to analyze below" mode={mode}/>}/>
        </Routes>
       </div>
       </Router>
    
  );
}

export default App;
