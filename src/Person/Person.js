import React from "react";

const person = (props)=>{
  
    return (
        <h1>
            Hola bebe {props.name} and I am {props.age} years old
            <p>{props.children}</p>
        </h1>
    );
}

export default person