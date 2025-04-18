import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import React from 'react'

const CaptainLogout = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [isLoading , setLoading] = useState(true);

    useEffect(() => {
        if(token) {
            axios.get(`${import.meta.env.VITE_BASE_URL}captains/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                if(res.status === 200) {
                    localStorage.removeItem("token");
                    setLoading(false)
                    navigate('/captain/login');
                }
            }).catch((err) => {
                console.log(err);
                setLoading(false)
                navigate('/captain/home');
            });
        }
      } ,[]);


    if(isLoading) {
        return <div>Loading...</div>
    }
  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout