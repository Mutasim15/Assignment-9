import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Jobdetails from './Components/Jodetails/Jobdetails.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs.jsx';




// console.log(details)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<App></App>,
        loader:()=>fetch('chatgpt.json')
    
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'jobdetail/:jobdetailId',
        element:<Jobdetails></Jobdetails>,
        loader:({params})=>fetch('chatgpt.json')
        // loader:({params})=>fetch(`chatgpt.json/${params.jobdetailId}`)
       
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applyjobs/:applyjobId',
        element:<Appliedjobs></Appliedjobs>,
        loader:({params})=> fetch('chatgpt.json')
      }
     
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App></App> */}
  </React.StrictMode>,
)
