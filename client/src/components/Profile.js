import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import NotificationList from './NotificationList';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import IssuedBooks from './IssuedBooks';

const Profile = () => {
    const issuedBoooks = useSelector(store => store.issued.items)
    console.log(issuedBoooks)
    const handleClick = () => {
        window.localStorage.clear();
        window.location.href = '/signin'
    }
    return (
        <>
            <div className='min-h-[650px] bg-bgColor w-full flex py-8 px-16 gap-20'>
                <NotificationList />
                <div className='flex flex-col gap-10'>
                    <div className='w-full flex justify-end'>
                        <button className="w-fit bg-blue-500 hover:bg-orange-400 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110" onClick={() => handleClick()}>
                            Sign out
                        </button>
                    </div>
                    <Cart />
                    <IssuedBooks />
                </div>
            </div>
        </>
    )
}

export default Profile