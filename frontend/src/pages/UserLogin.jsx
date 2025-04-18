import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../Context/UserDataContext';
const UserLogin = () => {

  const [email,setEmail] = useState("");
  const [password , setPassword] = useState("");
  const {setUser} = useContext(UserDataContext);

  const navigate = useNavigate();
  
  const submitHandler = async (e) => {  
     e.preventDefault();
    const data = {
      email,
      password
    }

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}users/login`, data);
    if(res.status === 200) {
      alert("User logged in successfully!");
      setUser(res.data.user);
      console.log(res)
      console.log("token here : " , res.data.token)
      localStorage.setItem("token", res.data.token);
      navigate('/home');
    }
    setEmail("");
    setPassword("");

  }


  return (
    <div className=' h-screen w-full p-7 flex flex-col justify-between '>

    <div>

      <img src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" className='w-20 mb-10 ' alt="" />

      <form onSubmit={ (e) => { submitHandler(e) }}>

      <h2 className=' mb-2 text-lg font-normal '>What's your email</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
      <h2 className=' mb-2 text-lg font-normal '>Enter Password</h2>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
      <button type="submit" className='bg-black text-white w-full p-2 rounded-md mb-2'>Login</button>
      </form>
    <p className=' text-center '>New here? <span> <Link to ="/user/register" className=' text-blue-500 '>Create new account.</Link></span></p>
    </div>

      <div>
        <Link to="/captain/login" className=' w-full p-2 bg-green-300 text-black inline-block text-center font-semibold rounded-md cursor-pointer' >Sign In as Captain</Link>
      </div>


    </div>
  )
}

export default UserLogin