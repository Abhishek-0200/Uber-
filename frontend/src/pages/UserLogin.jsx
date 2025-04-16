import React from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {
  return (
    <div className=' h-screen w-full p-7 flex flex-col justify-between '>

    <div>

      <img src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" className='w-20 mb-10 ' alt="" />

      <form>

      <h2 className=' mb-2 text-lg font-normal '>What's your email</h2>
      <input type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
      <h2 className=' mb-2 text-lg font-normal '>Enter Password</h2>
      <input type="password" placeholder="Password" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
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