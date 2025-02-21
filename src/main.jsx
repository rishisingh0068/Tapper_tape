import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet } from 'react-router'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Outlet />
    <App /> 
    <Footer />
  </StrictMode>,
)
