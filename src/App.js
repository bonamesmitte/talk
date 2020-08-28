import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';
import Interview from './components/Interview';
import Cards from './components/Cards';
import Directory from './components/Directory';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Interview />
      <Cards />
      <Directory />
      <Bottom />
    </div>
  );
}

export default App;
