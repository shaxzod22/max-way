import React, { useState } from 'react'
import Branches from '../components/Branches'

const BranchesPage = () => {
 const [isBranch,setIsBranch] = useState(true)
  return (
    <div  className='w-full border-t-2 border-gray-100'>
    <div className="max-w-[1200px] my-[32px] px-4 mx-auto">
    <div className="flex xl:flex-row flex-col xl:items-center justify-between">
    <h1 className='text-[32px] mb-3 font-bold'>Filiallar</h1>
    <div className="flex  items-center gap-3 text-[17px] font-semibold">
    <button onClick={()=>setIsBranch(true)}  className={` max-w-[465px] w-full rounded-3xl xl:w-[144px] h-[44px] ${isBranch?'bg-[#51267D] text-white':'bg-[#F1EFF4] text-[#465057]'}`}>Ro'yxat</button>
    <button onClick={()=>setIsBranch(false)} className={`${!isBranch?'bg-[#51267D] text-white':'bg-[#F1EFF4] text-[#465057]'} max-w-[465px] w-full rounded-3xl xl:w-[144px] h-[44px] `}>Xarita</button>
    </div>
    </div>
    
    {isBranch && <Branches/>}
   
    </div>
    {!isBranch && <div>
    <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A1d7b1b28d2e768cacb8fe86603742f524068c1b3a3e71ff8c0e3a199623a2901&amp;source=constructor" width="100%" height="663" frameborder="0"></iframe>
      </div>}
    </div>
    )
  }
  
  export default BranchesPage
  