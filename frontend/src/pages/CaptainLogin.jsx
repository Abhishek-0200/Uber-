import React from 'react'
import { Link } from 'react-router-dom'
const CaptainLogin = () => {
  return (
    <div className=' h-screen w-full p-7 flex flex-col justify-between '>

    <div>

      <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" className='w-20 mb-10 ' alt="" />

      <form>

      <h2 className=' mb-2 text-lg font-normal '>What's your email</h2>
      <input type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
      <h2 className=' mb-2 text-lg font-normal '>Enter Password</h2>
      <input type="password" placeholder="Password" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
      <button type="submit" className='bg-black text-white w-full p-2 rounded-md mb-2'>Login</button>
      </form>
    <p className=' text-center '>Wanna be a rider? <span> <Link to ="/captain/register" className=' text-blue-500 '>Register as a Captain.</Link></span></p>
    </div>

      <div>
        <Link to="/user/login" className=' w-full p-2 bg-amber-200 text-black inline-block text-center font-semibold rounded-md cursor-pointer' >Sign In as User</Link>
      </div>


    </div>
  )
}

export default CaptainLogin