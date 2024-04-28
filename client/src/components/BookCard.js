import React from 'react'
import { BookData } from '../constant'
const BookCard = ({data}) => {
  return (
    <div className='h-80 w-44 flex items-center flex-col gap-2 flex-shrink-0 hover:border-2 border-orange-400 cursor-pointer'>
        <div className='h-4/6 p-2 flex-shrink-0'>
            <img className='h-full rounded-lg' src={data?.imageURLS?.large} alt='BookImg'/>
        </div>
        <p className='text-sm text-gray-400 font-semibold'>{data?.author.substr(0,10)}</p>
        <p>{data?.title.substr(0,10)+'...'}</p>
        <div className='flex w-full px-2 justify-between text-orange-400 font-semibold'>
            <p>₹{data?.price}</p>
            <p>+{data?.rating}★</p>
        </div>
    </div>
  )
}

export default BookCard