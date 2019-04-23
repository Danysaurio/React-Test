import React from 'react';
import './App.css';
import Person from "./Person/Person";

import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <Person name="Daniel" age="24"/>
    </div>
    );
    //React.createElement('div', {className:"App"}, React.createElement('h1',null,"Hello I am a React app!!"))
}

export default App;
