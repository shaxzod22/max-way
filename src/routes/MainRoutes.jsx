import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import NotFoundPage from '../pages/NotFoundPage'
import AboutPage from '../pages/AboutPage'
import BranchesPage from '../pages/BranchesPage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'

const MainRoutes = () => {
  return (
    <Routes>
    <Route element={<Layout/>}>
    <Route path='/' element={<HomePage/>} />
    <Route path='/branches' element={<BranchesPage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/cart' element={<CartPage/>} />
    </Route>
    <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    )
  }
  
  export default MainRoutes
  