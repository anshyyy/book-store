import React, { useState } from 'react';
import axios from 'axios'
const AddBook = () => {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [yearOfPublication, setYearOfPublication] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [publisher, setPublisher] = useState('');
  const [smallImageUrl, setSmallImageUrl] = useState('');
  const [mediumImageUrl, setMediumImageUrl] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)

    axios.post('http://52.90.160.27:3000/api/book/create', {
        ISBN:isbn,
        title:title,
        author:author,
        publisher: publisher,
        yearOfPublication: yearOfPublication, 
        rating:rating,
        price:price,
        imageURLS:{
            small: smallImageUrl,
            medium: smallImageUrl,
            large: smallImageUrl
        }
    })
    .then((res)=>{
        console.log(res)
        // if(res.status === "ok")
    })
    .catch((e) =>{
        console.log(e)
    })
    // Clear form fields after submission
    clearForm();
  };

  const clearForm = () => {
    setIsbn('');
    setTitle('');
    setAuthor('');
    setYearOfPublication('');
    setRating('');
    setPrice('');
    setPublisher('');
    setSmallImageUrl('');
    setMediumImageUrl('');
    setLargeImageUrl('');
  };

  return (
    <div className="container mx-auto p-5">
      <div className="bg-white p-8 mb-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add a Book</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Year of Publication" value={yearOfPublication} onChange={(e) => setYearOfPublication(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Small Image URL" value={smallImageUrl} onChange={(e) => setSmallImageUrl(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;