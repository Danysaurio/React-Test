import React from "react";
function popo(){
    return ["hola", " bebe"]
}
const person = (props)=>{
    return <p>I'm a person {props.name} and I am {props.age*4} years old!</p>
}; 

export default person;
