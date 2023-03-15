import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuData } from '../data/MenuData'
const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-gray-300 py-y px-2'>
        <div className='justify-items-center max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            {menuData.map((item)=>(
                <div key={item.categoriId}>
                     <h6 className='font-bold uppercase pt-2'>{item.title}</h6>
                     <ul>
                        {item.sub.map((subitem)=>(
                            <li key={subitem.subcategoriId} className='py-1'>
                                <NavLink to ={subitem.link}
                                onClick={()=>{
                                    window.location.replace(subitem.link)
                                 }}>
                                    {subitem.subtitle}
                                </NavLink>
                            </li>
                        ))} 
                     </ul>
                </div>
            ))}
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2023 Workflow, LLC. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer