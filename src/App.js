
import './App.css';
//import About from './Component/About';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import React, { useState } from 'react'

function App() {
  const [mode,setMode] = useState('light');
const toggleMode = () =>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}
  return (
    <>
      <Navbar title = "TextUtils" text ="Dark Mode"mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
         <Form heading="Enter The Text Below " mode={mode}/>
         {/*About/>*/}
      </div>
    
    </>
  );
}

export default App;
