import React from 'react'
import LibraryGirl from '../assets/Library-girl.png'
const LearningBanner = () => {
  return (
    <div className='h-[500px] w-full flex p-16 gap-20 my-10 bg-gray-800'>
        <div className='h-full w-1/2 flex justify-end relative'>
            <div className='w-40 h-20 rounded-lg -top-10 -right-20 bg-orange-400 absolute text-2xl font-semibold flex justify-center items-center'><p className='w-10 text-center text-white'>+12k Books</p></div>
            <img className='h-full' src={LibraryGirl} alt='Lib-Girl'/>
        </div>
        <div className='h-full w-1/2 px-16 justify-center flex flex-col'>
            <h1 className='text-6xl w-96 text-white font-semibold'>
                Keep Reading. Keep Learning
            </h1>
        </div>
    </div>
  )
}

export default LearningBanner