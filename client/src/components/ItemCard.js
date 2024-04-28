import React from 'react'
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemCard = ({book}) => {
  const dispatch = useDispatch()
  const handeleAddItem = () => {
    dispatch(addItem(book))
  }  
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full aspect-[9/12]" src={book?.imageURLS?.large} alt={book?.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book?.title}</div>
          <p className="text-gray-700 text-base">
            by {book?.author}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><span className='line-through text-gray-400 px-2'>₹{(book?.price * 1.1).toFixed(2)}</span> ₹{book?.price}</span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handeleAddItem()}>
            Add to Cart
          </button>
        </div>
      </div>
    );
}

export default ItemCard

