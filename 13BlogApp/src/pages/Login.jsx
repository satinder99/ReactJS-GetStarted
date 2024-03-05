import React, { useState } from 'react'
import { Button,Input } from '../components'
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice'
import authService from "../appwrite/authService"
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("")

    const handleLogin = (e)=>{
        e.preventDefault();

        const userData = authService.login({email,password})
        userData
            .then((userData) => {
                if(userData.userId){
                    dispatch(authLogin(userData))
                    console.log(userData)
                    navigate("/")   
                }
                else{
                    const errorMsg = (String(userData)).split("\n");
                    setError(errorMsg[0])
                }
            })
            .catch((error) => {
                const errorMsg = (String(error)).split("\n");
                setError(errorMsg)
                }
            )
        }
    
    return (
    <>
        <div>
            {error && <h3 className='text-red-500'> Errors: {error}</h3>}
        </div>
        <form onSubmit={handleLogin}>
            <Input 
                label="Email" 
                placeholder="Enter username" 
                type='email'
                value={email}
                onChange={(e)=>(setEmail(e.target.value))}/>
            <br/>
            <Input 
                label="Password" 
                placeholder="Password" 
                type='password'
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}/>
            <br/>
            <Button type="submit" text="Login"/>

        </form>
    </>
  )
}

export default Login