import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import LoginScreen from './routes/login_screen.jsx'
import './index.css'
import Dashboard from './routes/dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />
  },
  {
    path: "/login",
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
