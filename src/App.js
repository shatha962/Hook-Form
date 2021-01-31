import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import PersonCard from './components/PersonCard';

function App() {
  const [ state, setState ] =useState({
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    conpassword: ""
  })
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
      <PersonCard data={state} />
    </div>
  );
}

export default App;
