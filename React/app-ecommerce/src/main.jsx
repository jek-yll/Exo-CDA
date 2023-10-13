import { RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './app-routing'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
