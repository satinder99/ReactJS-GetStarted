import React from 'react'
import { Button,Input } from '../components'
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../store/authSlice'
import authService from "../appwrite/authService"

function Login() {
    const dispatch = useDispatch();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = (e)=>{
        e.preventDefault();

        //call to appwrite service
        const userData = authService.login(email,password)
        console.log("userData in login.jsx", userData);
        if(userData){
            dispatch(authLogin(userData))
            console.log("login done from dispatcher");
        }
    }
    return (
    <>
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