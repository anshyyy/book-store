import React, { useState, useEffect } from 'react';
import ig from '../assets/Designer (3).png'
import ShimerBooksCardList from './ShimerBooksCardList';
import ItemCard from './ItemCard';
import axios from 'axios'
const BookFair = () => {
    const [bookData, setBookData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData() {
        try {
            const data = await axios.get('http://52.90.160.27:3000/api/fair/')
            setBookData(data?.data?.data?.books);
            console.log(data?.data?.data?.books);
        } catch {
            console.log("Something went wrong")
        }
    }
    return (
        <>
            <div className="flex w-full h-86 bg-bgColor px-16 py-10">
                <div className="w-2/5">
                    <img
                        src={ig}
                        alt="Book Fair"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="w-3/5 flex items-center justify-center bg-gray-200">
                    <h1 className="text-bold text-9xl uppercase">
                        Book Fair
                    </h1>
                </div>
            </div>
            <div className="bg-bgColor w-screen px-16 py-5">
                <div className='w-full flex justify-between'>
                    <h2 className="text-3xl font-bold py-8">Books</h2>
                </div>
                {
                    bookData.length == 0 ? <ShimerBooksCardList /> : 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            bookData.map((book, index) => {
                                return <ItemCard key={index} book={book} />
                            })
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default BookFair;