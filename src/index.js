import React, { children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import VideoDetail from './pages/VideoDetail';
import Video from './pages/Video';
import VideoForCategory from './pages/VideoForCategory';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element:<Video/> },
      {path: 'video', element:<Video /> },
      {path: 'video/:keyword', element:<Video/>},
      {path: 'video/watch/:videoId', element:<VideoDetail/>},
      {path: 'categoryVideo/:categoryNum', element:<VideoForCategory/>},
    ],
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} >
          <App />
   </RouterProvider>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
