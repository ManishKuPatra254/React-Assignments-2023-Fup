import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LogInPage } from './Components/Log In/Log-in';
import { AboutUsPage } from './Components/About Us/About-us';
import { RegisterPage } from './Components/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: '/login',
    element: <LogInPage />
  },

  {
    path: '/register',
    element: <RegisterPage />
  },

  {
    path: '/aboutus',
    element: <AboutUsPage />
  },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
