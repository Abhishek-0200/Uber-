import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/register" element={<UserRegister/>} />
        <Route path="/captain/register" element={<CaptainRegister/>} />
        <Route path="/captain/login" element={<CaptainLogin/>} />
      </Routes>
    </div>
  )
}

export default App