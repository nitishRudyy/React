import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [Counter, setCounter] = useState(5);

 
  const removeValue = () => {
    Counter -= 1;
    console.log(Counter ,   "remove value");
    setCounter(Counter);
  }
  return (

    <>
    <h1>hooker tutorial</h1>
    <h2>counter value : {Counter}</h2>

    <button 
    onClick={() => {
      Counter += 1;
      console.log(Counter, "add value");
      setCounter(Counter);
    }}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >remove value</button>
    </>
  )
}

export default App
