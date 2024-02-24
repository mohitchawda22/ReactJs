import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
    <h1>custom App</h1>
    </>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUSer='mohit'

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUSer
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
    // <MyApp/>
    // anotherElement
    reactElement
  // </React.StrictMode>,
)
