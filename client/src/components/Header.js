import React from 'react'
import ProfileIcon from '../assets/icons8-male-user-100.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const token = window.localStorage.getItem('token');
    return (
        <div className='h-16 w-full bg-bgColor flex gap-10 px-12 items-center justify-between'>
            <div className='h-full w-36 flex items-center font-extrabold'>
                <h1 className='text-4xl'>OB&S</h1>
            </div>
            <div className='h-full w-fit  flex gap-20 items-center text-lg'>
                <Link to="/">
                    <p className='font-bold hover:underline'>Home</p>
                </Link>
                <Link to="/shop">
                    <p className='font-bold hover:underline'>Shop</p>
                </Link>
                <Link to="/about">
                    <p className='font-bold hover:underline'>About</p>
                </Link>
                <Link to="/team">
                    <p className='font-bold hover:underline'>Team</p>
                </Link>
                <Link to="/bookFair">
                    <p className='font-bold hover:underline'>Book Fair</p>
                </Link>
                <Link to="/subscription">
                    <p className='font-bold hover:underline'>Subscription</p>
                </Link>
            </div>
            {
                token ? <Link to='/profile'><img className='w-10' src={ProfileIcon} alt='Profile' /></Link> :
                    <div className='h-10 w-28 flex rounded-md bg-orange-400 font-semibold items-center justify-center'>
                        <Link to="/signin">
                            <p className='text-white'>Sign in</p>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default Header