import React from 'react'
import { BrowserRouter as Roueter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Plans from '../Pages/Plans/Plans'
import Courses from '../Pages/Courses/Courses'
import About from '../Pages/About/About'

function Layout() {
  return (
   <Roueter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Plans/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
   </Roueter>
  )
}

export default Layout