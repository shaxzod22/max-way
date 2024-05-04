import React, { useRef } from 'react'
import Branches from '../components/Branches'

const BranchesPage = () => {
  const ref = useRef()
  const  handleClick= ()=>{
  ref.current?.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div  className='w-full border-t-2 border-gray-100'>
    <div className="max-w-[1200px] my-[32px] px-4 mx-auto">
    <div className="flex xl:flex-row flex-col xl:items-center justify-between">
    <h1 className='text-[32px] mb-3 font-bold'>Filiallar</h1>
    <div className="flex  items-center gap-3 text-[17px] font-semibold">
    <button  onClick={handleClick} className='text-white max-w-[465px] w-full rounded-3xl xl:w-[144px] h-[44px] bg-[#51267D]'>Ro'yxat</button>
    <button className={`cursor-not-allowed  text-[#465057] max-w-[465px] w-full rounded-3xl xl:w-[144px] h-[44px] bg-[#F1EFF4]`}>Xarita</button>
    </div>
    </div>
    
    <Branches/>
   
    </div>
    </div>
    )
  }
  
  export default BranchesPage
  