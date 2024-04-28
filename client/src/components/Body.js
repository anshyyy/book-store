import React from 'react'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='min-h-screen w-screen bg-bgColor'>
        <Outlet />
        
        {/* <ShopList /> */}
        {/* <Cart /> */}
        {/* <Invoice /> */}
    </div>
  )
}

export default Body