import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props =>{
   const [personsState, setPersonsState] = useState({
      persons: [
        {name:"Daniel", age: 24},
        {name:"Daniela", age: 21},
        {name:"Danielon", age: 30}
      ]
    });

    const switchNameHandler = ()=>{ 
      setPersonsState({persons:[
        {name:"Daniel", age: 24},
        {name:"Daniela", age: 21},
        {name:"Danielosn popo", age: 30}
      ]});
    };


    return (
      <div className="App">
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Hola bebe</Person>
        <button onClick={switchNameHandler}>Switch</button>
      </div>
    )
}

export default App;

