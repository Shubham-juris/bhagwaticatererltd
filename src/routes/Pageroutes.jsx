import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUsPage from '../pages/AboutUsPage.Jsx'
import Ourmenu from '../pages/Ourmenu'
import Reservation from '../pages/Reservation'
import Contact from '../pages/Contact'
import Latestnews from '../pages/Latestnews'


const Pageroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/menu' element={<Ourmenu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Latestnews' element={<Latestnews/>}/>

      </Routes>
    </>
  )
}

export default Pageroutes
