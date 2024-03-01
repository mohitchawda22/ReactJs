import React from 'react'
import { Outlet } from 'react-router-dom'
Header
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'





function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
