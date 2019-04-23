import React from 'react';
import logo from './logo.svg';
import './App.css';

import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <Person name="Daniel" age="24"/>
    </div>
  );
}

export default App;
