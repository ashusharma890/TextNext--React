import React from 'react'
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type) => {
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleMode = () =>{
    if(mode === 'light')
    {
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark Mode Enabled","success");
    }
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <div className="App">
       <NavBar mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>
   
  );
}

export default App;
