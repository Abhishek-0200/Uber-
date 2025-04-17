import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserDataProvder = ({children}) => {
   const [user ,setUser] = useState({
    "email": "",
    "password": "",
    "fullname": {
        "firstname": "",
        "lastname": ""
    }
   });
  
    return (
        // <div>
        //     {children}
        // </div>

    <UserDataContext.Provider value ={{user, setUser}} >
        {children}
    </UserDataContext.Provider>
)
}

export default UserDataProvder