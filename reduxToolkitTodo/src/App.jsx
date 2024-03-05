import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  

  return (
    <>
    <div>ReduxToolKit</div>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
