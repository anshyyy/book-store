import React, {useState, useEffect} from 'react'
import BookCard from './BookCard'
const BookLists = () => {
  const [bookData, setBookData] = useState([])
  const [newBooks, setNewbooks] = useState([])
  useEffect(() => {
    fetchData();
  },[])
  async function fetchData(){
    try{
      const data = await fetch('http://52.90.160.27:3000/api/book/')
      const dataJson = await data.json()
      setBookData(dataJson);
      let filterData = dataJson?.data.filter(element => element?.yearOfPublication >= 2000);
      setNewbooks(filterData)
    }catch{
      console.log("Something went wrong")
    }
  }
  return (
    <div className='min-h-80 w-full px-16'>
        <p className='text-2xl font-semibold py-5'>New Books</p>
        <div className='flex gap-10 overflow-auto'>
            {
              newBooks && newBooks.map((data, ind) => {
                 return <BookCard key={data.ISBN} data = {data}/>
                 return 1;
              })
            }
        </div>
    </div>
  )
}

export default BookLists