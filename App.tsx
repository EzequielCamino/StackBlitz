import * as React from 'react';
import './style.css';

export default function App() {

  const vocales = ["a","e","i","o","u"]
  
  function handleChange(e){
    if(vocales.includes(e.key)){
      e.preventDefault();
      console.log("No se aceptan vocales");
    }
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onKeyDown={handleChange}/>
    </div>
  );
}
