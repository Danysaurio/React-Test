import React from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>HI, I'm a react app </h1>
      <Person name="Daniel" age="24"/>
      <Person name="Daniela" age="243">Hola bebe</Person>
    </div>
    );
    //React.createElement('div', {className:"App"}, React.createElement('h1',null,"Hello I am a React app!!"))
}

export default App;
