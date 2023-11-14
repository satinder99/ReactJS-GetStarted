import { useContext } from "react";
import { useState } from "react";
import userContext from "../Context/UserContext";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(userContext)

    function handleSubmit(e){
        e.preventDefault();
        setUser({username,password})
    }

    return(
        <>
            <div>Login</div>
            <input type = "text" value={username} placeholder="username"
            onChange={(e) => setUsername(e.target.value)} />
            <br/>
            <input type = "text" value={password} placeholder="password"
            onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <input type="button" value="submit" onClick={handleSubmit}/>
            
        </>
    )
}

export default Login;