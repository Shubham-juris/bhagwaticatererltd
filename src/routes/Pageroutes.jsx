import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage'
import Home from '../pages/Home'
import ContactPage from '../pages/ContactPage'
import LatestnewsPage from '../pages/LatestnewsPage'
import OurmenuPage from '../pages/OurmenuPage'
import ReservationPage from '../pages/ReservationPage'


export default function Pageroutes () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/menu' element={<OurmenuPage/>}/>
        <Route path='/Reservation' element={<ReservationPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/Latestnews' element={<LatestnewsPage/>}/>

      </Routes>
    </>
  )
}
