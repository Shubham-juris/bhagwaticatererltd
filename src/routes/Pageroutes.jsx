import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Pageroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default Pageroutes
