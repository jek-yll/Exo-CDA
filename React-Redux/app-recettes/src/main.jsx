import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store.js';
import router from './app-routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

)
