import React from 'react'
import pngegg from '../assets/pngegg.png'
import { Link } from 'react-router-dom'
const MainHome = () => {
  return (
    <div className='w-full h-[600px] bg-bgColor flex justify-between'>
        <div className='h-full w-1/2 px-16 justify-center flex flex-col'>
            <h1 className='text-8xl '>
                A library That's Always Open.
            </h1>
            <p className='my-10'>You may accesst the best collection with over +30 generes</p>
            <Link to='/shop'>
            <div className='flex gap-10 items-center'>
                <div className='w-1/2 h-12 border-2 border-black rounded-3xl flex items-center justify-between overflow-hidden'>
                    <p className='px-10 font-semibold'>Enter</p>
                    <div className='w-12 flex items-center justify-center h-full font-bold text-xl bg-black text-white rounded-full'>→</div>
                </div>
                
                <p className='text-xl font-semibold underline'>Go to Shop →</p>
            </div>
                </Link>
            <div className=''>
                <p>+500 Reviews</p>
            </div>
        </div>
        <div className='flex justify-center items-center px-24'>
            <img src={pngegg} alt='MailImg' />
        </div>
    </div>
  )
}

export default MainHome