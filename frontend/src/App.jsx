import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import UserProtect from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtect from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

// import UserProtectWrapper from './pages/UserProtectWrapper'
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <UserProtect> <Start/> </UserProtect>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/register" element={<UserRegister/>} />
        <Route path="/captain/register" element={<CaptainRegister/>} />
        <Route path="/captain/login" element={<CaptainLogin/>} />
        <Route path="/home" element={ <UserProtect> <Home/> </UserProtect>} />
        <Route path='/user/logout' element={<UserProtect> <UserLogout/> </UserProtect>} />
        <Route path="/captain/home" element={<CaptainProtect> <CaptainHome/> </CaptainProtect>} />
        <Route path='/captain/logout' element={<CaptainProtect> <CaptainLogout/> </CaptainProtect>} />
        {/* <Route path="/user/logout" element={<UserLogout/>} /> */}

      </Routes>
    </div>
  )
}

export default App