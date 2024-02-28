import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let Myobj={
    username:"mohit",
    age:21
  }

  let myArr=["apple","banana","orange"]

  return (
   <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' btnText="visit me">Madmax||Tailwind test </h1>
      <Cards username="madmax" btnText="visit me"></Cards>
      </>
      )
}

export default App
