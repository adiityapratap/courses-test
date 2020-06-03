import React from 'react';
import './App.scss';
import Login from './containers/Login';
import LearningCenter from './containers/LearningCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routes from './routes';

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
