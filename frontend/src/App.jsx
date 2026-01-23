
import './App.css'
import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageScroll from './components/PageScroll'

function App() {
  return (

    <>
    <PageScroll />
    <Navbar />
       <Outlet />{/* the children in the routers will display here */}
    <Footer />
    </>
  )
}

export default App
