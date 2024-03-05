import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice'
import authservice from '../appwrite/authService'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const deletedSession = authservice.logout()
    deletedSession.then( session => {
      if(session.message == "")
        navigate("/login")
      else{
      }
    }
    )
    dispatch(logout())
  return (
    <div>Loging you out, please wait</div>
  )
}

export default Logout