import React from 'react'
import ShimerBooksCard from './ShimerBooksCard'
import {shimerCount} from '../constant'
const ShimerBooksCardList = () => {
  return (
    <div className='flex flex-wrap gap-8' >
        {
            shimerCount.map((d, ind) => {
                return <ShimerBooksCard key={ind} />
            })
        }  
    </div>
  )
}

export default ShimerBooksCardList