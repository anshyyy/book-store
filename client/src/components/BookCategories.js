import React from 'react'
import {categories} from '../constant'
const BookCategories = () => {
    return (
      <div className="h-80 bg-gray-800 px-16 py-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Categories</h2>
        <div className="grid grid-cols-3 gap-10">
          {
          categories.map((category) => (
            <button
              key={category}
              className={`bg-gray-300 hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 rounded `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

export default BookCategories
