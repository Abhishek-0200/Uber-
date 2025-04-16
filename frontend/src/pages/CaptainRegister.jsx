import React from 'react';
import { Link } from 'react-router-dom';

const CaptainRegister = () => {
  return (
    <div className='h-screen w-full p-7 flex flex-col justify-between'>

      <div>
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" className='w-20 mb-10' alt="Uber Logo" />

        <form>
          <h2 className='mb-2 text-lg font-normal'>What's your full name?</h2>
          <div className='flex gap-4 mb-4'>
            <input type="text" placeholder="First Name" className='border border-gray-300 rounded-md p-2 w-1/2' />
            <input type="text" placeholder="Last Name" className='border border-gray-300 rounded-md p-2 w-1/2' />
          </div>

          <h2 className='mb-2 text-lg font-normal'>What's your email?</h2>
          <input type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 w-full mb-4' />

          <h2 className='mb-2 text-lg font-normal'>Create a password</h2>
          <input type="password" placeholder="Password" className='border border-gray-300 rounded-md p-2 w-full mb-4' />

          <button type="submit" className='bg-black text-white w-full p-2 rounded-md mb-2'>Register</button>
        </form>

        <p className='text-center'>Already have an account? <span><Link to="/captain/login" className='text-blue-500'>Login here.</Link></span></p>
      </div>

      <div>
        <Link to="/user/register" className='w-full p-2 bg-amber-200 text-black inline-block text-center font-semibold rounded-md cursor-pointer'>Register as User</Link>
      </div>

    </div>
  );
};

export default CaptainRegister;