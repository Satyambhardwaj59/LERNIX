import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educator/Navbar'

const Educator = () => {
  return (
    <div className='text-[15px] leading-[21px] min-h-screen bg-white'>
      <Navbar/>
      <div>
        {<Outlet />}
      </div>
    </div>
  )
}

export default Educator
