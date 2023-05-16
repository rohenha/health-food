// import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from '@libs/routes'
import { ToastContextProvider } from '@contexts/ToastContext'
import { AuthContextProvider } from '@contexts/AuthContext'

import './styles/site.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthContextProvider>
  <ToastContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </ToastContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>
)
