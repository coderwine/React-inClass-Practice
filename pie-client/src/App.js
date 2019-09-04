import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/auth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Auth/>
      <h1>Pies</h1>
      
    </div>
  );
}

export default App;
