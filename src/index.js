import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import More from './Pages/More';
import Search from './Pages/Search';
import Write from './Pages/Write';
import Notification from './Pages/Notification';
import Explore from './Pages/Explore';
import Bookmarks from './Pages/Bookmarks';
import Profile from './Pages/Profile';
import Feed from './Pages/Feed';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "/explore",
    element: <Explore/>,
  },
  {
    path: "/more_from_quogle",
    element: <More/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

]);

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
