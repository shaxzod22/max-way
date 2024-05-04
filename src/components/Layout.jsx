import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './sections/Footer'
import Header from './sections/Header'

const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default Layout
