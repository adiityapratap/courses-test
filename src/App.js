import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import LearningCenter from './containers/LearningCenter';

function App() {
  return (
    <div className="App">
      <Login />
      <LearningCenter />
    </div>
  );
}

export default App;
