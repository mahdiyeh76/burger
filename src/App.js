import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerBuilder from './Components/BurgerBuilder/Burgerbuilder';

function App() {
  return (
    <div className="App">
        <Header />
        <BurgerBuilder />
        
    </div>
  );
}

export default App;
