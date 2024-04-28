import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    axios.post("http://52.90.160.27:3000/api/user/login/",{
        email,
        password,
      })
      .then((res) => {
        if (res.data.success === true) {
            console.log(res.data.data.token, "userRegister");
          alert("login successful");

          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("userId", res.data.data.userId);
        //   window.localStorage.setItem("loggedIn", true); 
          window.location.href = "./";
        }
      })
      .catch((err)=>{
        console.log(err)
      });
  }
  return (
    <div className='h-[650px] bg-bgColor px-16 flex justify-center items-center'>
        <div className='h-fit w-1/2 p-2 py-6 bg-orange-400 flex flex-col justify-center items-center rounded-2xl'>
            <h1 className='text-3xl text-white font-semibold'>Sign in</h1>
            <form onSubmit={handleSubmit} className='h-full w-full p-10 flex flex-col items-center gap-10'>
                <div className='w-1/2 flex flex-col '>
                    <label className='text-2xl font-semibold text-white' htmlFor='email'>Email</label>
                    <input className='h-12 w-full px-5 text-xl rounded-xl' type='text' name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <label className='text-2xl font-semibold text-white' htmlFor='password'>Password</label>
                    <input className='h-12 w-full px-5 text-xl rounded-xl' type='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='w-1/2 flex flex-col items-center gap-4'>
                    <button className='h-10 w-28 rounded-md bg-bgColor font-semibold hover:bg-orange-100'>Sign in</button>
                    <p className='text-white text-lg'>Don't have an account ? <Link to='/signup'><span className='text-blue-700 font-bold'>Register</span></Link></p>
                    <p className='text-white text-lg'>Admin sign in ? <Link to='/admin'><span className='text-blue-700 font-bold'>Sign in</span></Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin