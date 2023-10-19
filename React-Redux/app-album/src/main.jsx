import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { RouterProvider } from 'react-router-dom'
import router from './app-routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
