import React, { useState, useEffect } from 'react';
import { cartData } from '../constant'
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import IssuedItem from './IssuedItem';

const IssuedBooks = () => {
    const id = localStorage.getItem('userId')
    const [issuedBooks, setIssuedBooks] = useState([])
    async function fetchData(){
        try{
            const data = await axios.get(`http://52.90.160.27:3000/api/user/${id}`)
            setIssuedBooks(data?.data?.data?.booksIssued)
            // console.log("liii",data?.data?.data?.booksIssued);
        }catch(e){
            console.log(e)
        }
    }
   useEffect(() => {
        fetchData();
   },[])
    // console.log(issuedBooks)
    const calculateTotal = () => {
        let total = 0
        for (let item of issuedBooks) {
          total += item.price;
        }
        
        return total
      }
    return (
        <div className="cart-page max-h-[650px] h-fit w-[900px] bg-bgColor px-8 py-3 rounded-lg shadow-lg overflow-scroll">
            <h1 className="text-xl font-bold text-center text-gray-800">Total issued books - {issuedBooks.length}</h1>
            {issuedBooks.map((item, index) => (
                <IssuedItem key={index} item={item?.bookId} booksIssued = {item} />
            ))} 
        </div>
    )
}

export default IssuedBooks