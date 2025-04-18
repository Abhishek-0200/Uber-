import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname :""
  });
  const [captainData, setCaptainData] = useState({});
  const [vehicle, setVehicle] = useState({
    color: "",
    type: "",
    plate: "",
    capacity: ""
  });

  const navigate = useNavigate();
  const {setCaptain} = useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
      password,
      vehicle
    };
  
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}captain/register`, data);

    if(res.status == 201) {
      localStorage.setItem("token", res.data.token);
      setCaptain(data);
      navigate("/captain/home");
    }
  
    setEmail("");
    setPassword("");
    setVehicle({ color: "", type: "", plate: "", capacity: "" });
    setFullname({ firstname: "", lastname: "" });
  };

  return (
    <div className='h-screen w-full p-7  flex flex-col justify-between'>

      <div>
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" className='w-16 mb-6' alt="Uber Logo" />

        <form onSubmit={submitHandler}>
          <h2 className='mb-2 text-lg font-normal'>What's your full name?</h2>
          <div className='flex gap-4 mb-4'>
            <input value={fullname.firstname} onChange={(e) => setFullname({...fullname, firstname: e.target.value})} type="text" placeholder="First Name" className='border border-gray-300 rounded-md p-2 w-1/2' />
            <input type="text" value={fullname.lastname} onChange={(e) => setFullname({...fullname, lastname: e.target.value})} placeholder="Last Name" className='border border-gray-300 rounded-md p-2 w-1/2' />
          </div>

          <h2 className='mb-2 text-lg font-normal'>What's your email?</h2>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className='border border-gray-300 rounded-md p-2 w-full mb-4' />

          <h2 className='mb-2 text-lg font-normal'>Create a password</h2>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className='border border-gray-300 rounded-md p-2 w-full mb-4' />

          <h2 className='mb-2 text-lg font-normal'>Vehicle Details</h2>
          <input value={vehicle.color} onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })} type="text" placeholder="Vehicle Color" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
          <input value={vehicle.type} onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })} type="text" placeholder="Vehicle Type" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
          <input value={vehicle.plate} onChange={(e) => setVehicle({ ...vehicle, plate: e.target.value })} type="text" placeholder="Vehicle Plate" className='border border-gray-300 rounded-md p-2 w-full mb-4' />
          <input value={vehicle.capacity} onChange={(e) => setVehicle({ ...vehicle, capacity: e.target.value })} type="number" placeholder="Vehicle Capacity" className='border border-gray-300 rounded-md p-2 w-full mb-4' />

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