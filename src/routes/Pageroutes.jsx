import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUsPage from '../pages/AboutUsPage.Jsx'


const Pageroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
      </Routes>
    </>
  )
}

export default Pageroutes
