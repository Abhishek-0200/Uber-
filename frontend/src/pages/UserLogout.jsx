import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserDataContext } from '../Context/UserDataContext'
import axios from 'axios'

const UserLogout = () => {
const token = localStorage.getItem("token");
// const {user ,setUser} = useContext(UserDataContext);
const navigate = useNavigate();
const [isLoading , setLoading] = useState(true);

useEffect(() => {
    if(token) {
        axios.get(`${import.meta.env.VITE_BASE_URL}users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if(res.status === 200) {
                localStorage.removeItem("token");
                // setUser(null);
                setLoading(false)
                navigate('/user/login');
            }
        }).catch((err) => {
            console.log(err);
            setLoading(false)
            navigate('/home');
        });
    }
  },[])
if(isLoading)
return <div>Loading...</div>
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout