import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ourmenu from '../pages/Ourmenu'
import Reservation from '../pages/Reservation'
import AboutUsPage from '../pages/AboutUsPage'
import Home from '../pages/Home'
import ContactPage from '../pages/ContactPage'
import LatestnewsPage from '../pages/LatestnewsPage'


export default function Pageroutes () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/menu' element={<Ourmenu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/Latestnews' element={<LatestnewsPage/>}/>

      </Routes>
    </>
  )
}
