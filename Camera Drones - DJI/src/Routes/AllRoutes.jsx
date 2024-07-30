import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Handheld from '../Pages/Handheld'
import Homepage from '../Pages/Homepage'
import Store from '../Pages/Store'
import Login from '../Pages/Login'
import Description from '../Pages/Description'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/handheld' element={<Handheld />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/description' element={<Description />}></Route>
    </Routes>
  )
}

export default AllRoutes
