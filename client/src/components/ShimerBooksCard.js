import React from 'react'
import './css/ShimerBooksCardCss.css';
const ShimerBooksCard = () => {
    return (
        <div className="w-96 rounded overflow-hidden shadow-lg bg-gradient-to-tr from-gray-400 to-gray-300 animate-shimmer flex-shrink-0">
          <div className="w-full aspect-[9/12]"></div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base">
              
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
          </div>
          <div className="px-6 pt-4 pb-2">

          </div>
        </div>
      );
}

export default ShimerBooksCard