import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/sections/Header'
import AboutPage from '../pages/AboutPage'
import BranchesPage from '../pages/BranchesPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/branches' element={<BranchesPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
  )
}

export default MainRoutes
