import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Login from '../Login'

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router;