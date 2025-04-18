import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ourmenu from '../pages/Ourmenu'
import Reservation from '../pages/Reservation'
import Latestnews from '../pages/Latestnews'
import AboutUsPage from '../pages/AboutUsPage'
import Home from '../pages/Home'
import ContactPage from '../pages/ContactPage'


export default function Pageroutes () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/menu' element={<Ourmenu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/Latestnews' element={<Latestnews/>}/>

      </Routes>
    </>
  )
}
