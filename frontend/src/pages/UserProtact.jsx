import { useState, useEffect, Children } from "react";
import { useContext } from "react";
import axios from "axios";
import { UserDataContext } from "../Context/UserDataContext";
import { useNavigate } from "react-router-dom";



const UserProtact = () => {
    
   const [isLoading, setIsLoading] = useState(true);
   const token = localStorage.getItem("jwt");
   console.log("token is : ", token)
   
   const {user , setUser} = useContext(UserDataContext);
   const navigate = useNavigate();

   useEffect( () => {
    if(!token) {
        setIsLoading(false);
        navigate("/user/login");
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}users/profile`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) =>{
        console.log(res)
        if(res.status === 200) {
            console.log("entered to response")
            console.log("the token is : ", res.data.token);
            console.log("the user is : ", res.data.user);
            setUser(res.data.user);
            setIsLoading(false);
        }else {
            setIsLoading(false);
            navigate("/user/login")
        }
    }).catch((err) => {
        console.log(err.message);
        setIsLoading(false);
        navigate("/user/login")
    })
   },[token])
    

if(isLoading) return <div>
    Loading...
</div>

return (
    <>
    {Children}
    </>
)
}


export default UserProtact;