import React, { useState } from 'react'
import authService from '../appwrite/authService'
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Button, Input } from '../components';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup=(e)=>{
        e.preventDefault();
        console.log("Inside signup.jsx : email is : ",email," Password is : ",password)
        const userData = authService.createAccount({email,password})
        
        if(userData){
            userData
            .then((userData) => userData.json)
            .then(
                dispatch(login(userData))
            )

            navigate("/")
        }
    }
  return (
    <>
        <form onSubmit={handleSignup}>
            <Input 
                label="Email" 
                placeholder="Enter username" 
                type='email'
                value={email}
                onChange = {(e)=>(setEmail(e.target.value))}/>
            <br/>
            <Input 
                label="Password" 
                placeholder="Password" 
                type='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <Button type="submit" text="Sign up"/>

        </form>
    </>
  )
}

export default Signup