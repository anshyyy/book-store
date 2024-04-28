import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
const FeaturedCollection = () => {
  const [bookData, setBookData] = useState([])
  const [featuredBooks, setFeaturedBooks] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  async function fetchData() {
    try {
      const data = await fetch('http://52.90.160.27:3000/api/book/')
      const dataJson = await data.json()
      setBookData(dataJson);
      let filterData = dataJson?.data.filter(element => element?.ratings >= 4);
      setFeaturedBooks(filterData)
      console.log(filterData);
    } catch {
      console.log("Something went wrong")
    }
  }
  return (
    <div className='min-h-80 w-full px-16'>
      <p className='text-2xl font-semibold py-5'>Featured Collections</p>
      <div className='flex gap-10 flex-wrap'>
        {
          featuredBooks && featuredBooks.map((data, ind) => {
            return <BookCard key={data.ISBN} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default FeaturedCollection