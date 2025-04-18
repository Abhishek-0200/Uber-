import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserDataProvider from './Context/UserDataContext.jsx'
import CaptainProvider from './Context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
   
  <CaptainProvider>
   <UserDataProvider>
   <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserDataProvider>
    </CaptainProvider>
)
