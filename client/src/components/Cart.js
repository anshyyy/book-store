import React, { useState } from 'react';
import { cartData } from '../constant'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Cart = () => {
  const userId = localStorage.getItem('userId')
  let totalAmount = 0;
  const cartItemsData = useSelector(store => store.cart.items)


  const handleCart = () => {

    const data = {
      userId: userId,
      issue: cartItemsData,
      amount: totalAmount
    }

    axios.post('http://52.90.160.27:3000/api/bill', data)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const calculateTotal = () => {
    let total = 0
    for (let item of cartItemsData) {
      total += item.price;
    }
    totalAmount = total
    return total
  }
  return (
    <div className="cart-page max-h-[650px] h-fit w-[900px] bg-bgColor px-8 py-3 rounded-lg shadow-lg overflow-scroll">
      <h1 className="text-xl font-bold text-center text-gray-800">Your Cart - {cartItemsData.length} items</h1>
      {cartItemsData.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <div className="flex justify-between items-center mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold text-gray-800">Total Amount:</h2>
        <span className="text-xl font-bold text-green-500">₹{calculateTotal()}</span>
      </div>

      <div className="text-center mt-6 w-full flex justify-center">
        {
          totalAmount == 0 ? <p className="w-fit bg-red-600 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110">Your Cart is Empty !</p> :
            <Link to='/invoice'>
              <p className="w-fit bg-blue-500 hover:bg-orange-400 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110" onClick={() => handleCart()}>Place Order</p>
            </Link>
        }
      </div>
    </div>
  );
};

export default Cart;