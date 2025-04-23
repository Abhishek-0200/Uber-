import e from "cors";
import { UserDataContext } from "../Context/UserDataContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {

    const {user, setUser} = useContext(UserDataContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        console.log("user protect wrapper entered " ,token)
        if(!token) {
            
            navigate('/user/login');
        } else {
            axios.get(`${import.meta.env.VITE_BASE_URL}users/profile`, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }
            ).then((res) => {
                if(res.status === 200) {
                    setUser(res.data.user);
                    navigate('/home');

                }

                
            }).catch( (error) => {
                console.log(error.message);
                navigate('/user/login');
            })
        }
    },[])
   
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {children}
        </div>
    )

}


export default UserProtectWrapper