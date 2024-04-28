import React, { useState } from 'react';
import logo from '../assets/pngegg.png'
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';

const IssuedItem = ({ item, booksIssued }) => {
    return (
        <div className="flex justify-between items-center mb-2 p-4 border-b border-gray-200">
            <div className="flex items-center gap-5">
                <img src={item?.imageURLS?.large} alt={item.title} className="w-20 h-20 pr-4 rounded shadow" />
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">by {item.author}</p>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className='font-bold text-base'>Return Date: {booksIssued?.returnDate.split('T')[0]}</p>
                </div>
            </div>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
                Read
            </button>
        </div>
    );
}
export default IssuedItem
