import React, { forwardRef } from 'react'
import { branches as branchesData } from './data/branches'

const Branches = () => {
    
    const date = new Date()
    const hour = date.getHours()
    
    function checkNum (b,a){
        let isOpen ;
        if(b<a){
            if((hour>=a && hour<24) || (hour>=0 && hour<b)){
            isOpen= true
            }else{
            isOpen = false
            }
        }else{
            if(hour>=a && hour<b){
                isOpen = true
            }else{
            isOpen = false
            }
        }

        return isOpen
    }
    
    return (
        <div>
        <ul className='py-[22px] max-w-[551px]'>
        {branchesData.map((item,index)=>(
            <li key={index} className='px-5 py-4 w-full'>
            <div className="w-full flex justify-between border-b-2 border-gray-100 pb-3">
            <div className="max-w-[350px]">
            <h2 className='mb-[3px] text-[20px] font-bold'>{item.name}</h2>
            <p>{item.address}</p>
            </div>
            <p className={`text-end ${checkNum(item.endTime.slice(0,2),item.startTime.slice(0,2))?'text-[#5AC53A]':'text-red-600'}`}>{checkNum(item.endTime.slice(0,2),item.startTime.slice(0,2))?`${item.endTime} gacha ochiq`:`${item.startTime} gacha yopiq`}</p>
            </div>
            
            <div className="py-3 flex justify-between">
            <div className="">
            <span className='text-[#808080]'>Ish vaqti:</span>
            <p>Du-Yak: {item.startTime}-{item.endTime}</p>
            </div>
            <div className="flex flex-col items-end">
            <span className='text-[#808080]'>Telefon:</span>
            <p>{item.phoneNum}</p>
            </div>
            </div>
            </li> 
            ))}
            
            </ul> 
           
        </div>           
            )
        }
        
        export default forwardRef(Branches)
        