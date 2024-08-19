import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Handheld from '../Pages/Handheld'
import Homepage from '../Pages/Homepage'
import Store from '../Pages/Store'
import Login from '../Pages/Login'
import Description from '../Pages/Description'
import Power from '../Pages/Power'
import Education from '../Pages/Education'
import Cart from '../Pages/Cart'
import Service from '../Pages/Service'
import PowerDescription from '../Pages/PowerDescription'
import EducationDescription from '../Pages/EducationDescription'
import EnterpriseDescription from '../Pages/EnterpriseDescription'
import ServiceDescription from '../Pages/ServiceDescription'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/handheld' element={<Handheld />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/power' element={<Power />}></Route>
        <Route path='/education-industry' element={<Education />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path='/power-description/:id' element={<PowerDescription />}></Route>
        <Route path='/education-description/:id' element={<EducationDescription />}></Route>
        <Route path='/enterprise-description/:id' element={<EnterpriseDescription />}></Route>
        <Route path='/service-description/:id' element={<ServiceDescription />}></Route>
    </Routes>
  )
}

export default AllRoutes
