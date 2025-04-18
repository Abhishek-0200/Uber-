import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import axios from 'axios'

const CaptainProtectWrapper = ( {children}) => {

    const {captain, setCaptain} = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(!token) {
            navigate('/captain/login');
        } else {
            axios.get(`${import.meta.env.VITE_BASE_URL}captain/profile`, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }
            ).then((res) => {
                if(res.status === 200) {
                    setLoading(false);
                    setCaptain(res.data.captain);
                    navigate('/captain/home');
                }
            }).catch( (error) => {
                console.log(error.message);
                setLoading(false);
                navigate('/captain/login');
            })
        }
    },[])



  return (
    <>
     {children}
    </>
  )
}

export default CaptainProtectWrapper