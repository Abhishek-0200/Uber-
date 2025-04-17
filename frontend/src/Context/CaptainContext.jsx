import { createContext } from "react";
import { useState } from "react";

export const CaptainContext = createContext();

const CaptainProvider = ({children}) => {
    const [captain, setCaptain] = useState({
        "fullname" : {
            "firstname": "",
            "lastname": ""
        },
        "email": "",
        "password": "",
        "vehicle" :{
            "type" : "",
            "plate" : "",
            "color" : "",
            "capacity" : ""
        } });


        return (
            <CaptainContext.Provider value ={{captain, setCaptain}} >
                {children}
            </CaptainContext.Provider>
        )
    }

export default CaptainProvider;