import React from 'react';
import './App.css';
import Login from './containers/Login';
import LearningCenter from './containers/LearningCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Login />
      {/* <LearningCenter /> */}
    </div>
  );
}

export default App;
