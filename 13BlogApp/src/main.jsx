import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"signup",
        element:<Signup/>
      }
    ]
  }
])

console.log("appjsx",import.meta.env.VITE_APPWRITE_URL)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
