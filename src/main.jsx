import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route.jsx';
import AuhProvider from './Providers/AuhProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuhProvider><RouterProvider router={router}></RouterProvider></AuhProvider>
  </React.StrictMode>,
)
