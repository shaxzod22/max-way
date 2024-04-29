import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const {pathname} = useLocation()
    
    const [pageLocation, setPageLocation] = useState(pathname)
  return (
    <div className='flex text-[18px] items-center gap-[32px]'>
     <Link className={`${pageLocation== '/'?'font-medium':''}`} to={'/'}>Menyu</Link> 
     <Link className={`${pageLocation.includes('/branches')?'font-medium':''}`} to={'/branches'}>Filiallar</Link> 
     <Link className={`${pageLocation.includes('/about')?'font-medium':''}`} to={'/about'}>Biz haqimizda</Link> 
     <Link className={`${pageLocation.includes('/contact')?'font-medium':''}`} to={'/contact'}>Bog'lanish</Link> 
    </div>
  )
}

export default Navbar
