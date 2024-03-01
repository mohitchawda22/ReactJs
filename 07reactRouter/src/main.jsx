import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'



//this is the method to creates the Browser router of the components of the websites to render...-> 

// const router=createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'/About',
//       element:<About/>
//     },
//     {
//       path:'/Contact',
//       element:<Contact/>
//     },
//     {
//       path:"/User/:UserId",
//       element:<User/>
//     }
//   ]
//   }
// ])


//this is the optimized method to creates the Browser router of the components of the websites to render...-> 

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
      <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
            <Route path='User/:userid' element={<User />}/>
              <Route path='github' element={<Github/>}/>
    </Route>
    )
)

//this section is created to  handle the routing of different pages in our app.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
