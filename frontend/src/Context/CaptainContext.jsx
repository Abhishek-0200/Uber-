import { createContext } from "react";
import { useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
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
            <CaptainDataContext.Provider value ={{captain, setCaptain}} >
                {children}
            </CaptainDataContext.Provider>
        )
    }

export default CaptainContext;