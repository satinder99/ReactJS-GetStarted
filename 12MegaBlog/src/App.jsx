import { useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth_service"
import { useEffect } from 'react';
import {login, logout} from "./features/authSlice"
import { Outlet } from 'react-router-dom'; 
import {Header,Footer} from "./components"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService
    .getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }
      else{
        dispatch(logout())
      }
    })
    .catch((error)=> console.log("App.jsx :: useEffect :: Error while getting user data",error))
    .finally(()=>setLoading(false))

  },[])
  return loading?null : (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
  </div>)
}

export default App
