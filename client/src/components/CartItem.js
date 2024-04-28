import React, { useState } from 'react';
import logo from '../assets/pngegg.png'
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const onRemove = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <div className="flex justify-between items-center mb-2 p-4 border-b border-gray-200">
            <div className="flex items-center gap-5">
                <img src={item?.imageURLS?.large} alt={item.title} className="w-20 h-20 pr-4 rounded shadow" />
                <div>
                    <h5 className="text-base font-bold text-gray-800">{item.title}</h5>
                    <p className="text-gray-600">by {item.author}</p>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                </div>
            </div>
            <button
                onClick={() => onRemove(item.ISBN)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
                Remove
            </button>
        </div>
    );
}
export default CartItem
