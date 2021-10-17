import React, { useState } from 'react';
import './App.css';
import MyForm from './components/form'
function App() {
  
  return (
    <div className="App">
      <h1>Student Profile</h1>
      <p>Kindly fill the form below</p>
      <MyForm/>
      
    </div>
  );
}

export default App;
