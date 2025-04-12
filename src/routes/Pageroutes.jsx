import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUsPage from '../pages/AboutUsPage.Jsx'
import Ourmenu from '../pages/Ourmenu'
import Reservation from '../pages/Reservation'


const Pageroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/menu' element={<Ourmenu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>

      </Routes>
    </>
  )
}

export default Pageroutes
