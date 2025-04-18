import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {UserDataContext} from '../Context/UserDataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: ""
  });

  const navigate = useNavigate();

  const { user, setUser} = useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname
      },
      email :email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/register` , data);

    if(response.status === 201) {
      setUser(data);
      localStorage.setItem("token", response.data.token);
      navigate('/home');
    }




    setFullname({ firstname: "", lastname: "" });
    setEmail("");
    setPassword("");
  };

  return (
    <div className='h-screen w-full p-7 flex flex-col justify-between'>

      <div>
        <img src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" className='w-20 mb-10' alt="Uber Logo" />

        <form onSubmit={submitHandler}>
          <h2 className='mb-2 text-lg font-normal'>What's your full name?</h2>
          <div className='flex gap-4 mb-4'>
            <input
              type="text"
              placeholder="First Name"
              value={fullname.firstname}
              onChange={(e) => setFullname({ ...fullname, firstname: e.target.value })}
              className='border border-gray-300 rounded-md p-2 w-1/2'
            />
            <input
              type="text"
              placeholder="Last Name"
              value={fullname.lastname}
              onChange={(e) => setFullname({ ...fullname, lastname: e.target.value })}
              className='border border-gray-300 rounded-md p-2 w-1/2'
            />
          </div>

          <h2 className='mb-2 text-lg font-normal'>What's your email?</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 rounded-md p-2 w-full mb-4'
          />

          <h2 className='mb-2 text-lg font-normal'>Create a password</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 rounded-md p-2 w-full mb-4'
          />

          <button type="submit" className='bg-black text-white w-full p-2 rounded-md mb-2'>Register</button>
        </form>

        <p className='text-center'>Already have an account? <span><Link to="/user/login" className='text-blue-500'>Sign in here.</Link></span></p>
      </div>

      <div>
        <Link to="/captain/register" className='w-full p-2 bg-green-300 text-black inline-block text-center font-semibold rounded-md cursor-pointer'>Register as Captain</Link>
      </div>

    </div>
  );
};

export default UserRegister;