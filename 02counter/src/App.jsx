import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let[counter,setCounter]=useState(15)
// let counter =15
const[remove,setRemove]=useState(15)

const addValue=()=>{
  if(counter==20){
    return
  }
  else{
    setCounter(counter+1)
  }
  // console.log("CLicked",Math.random(),counter)

}

const removeValue=()=>{
  if (counter==0){
    return
  }
  else{
    setCounter(counter-1)
  }
}


  return (
   <>
   <h1>chai aur react</h1>
   <h2>counter value:{counter}</h2>
   <h2>decrease value:{counter}</h2>

   <button 
   onClick={addValue}>Add Value</button>
   <br></br>
   <button 
   onClick={removeValue}>remove Value</button>
   </>
  )
}

export default App
