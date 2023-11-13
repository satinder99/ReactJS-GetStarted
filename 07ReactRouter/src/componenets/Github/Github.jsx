import { useState } from "react";

export default function Github(){
    const [data,setData] = useState({})
    const [follower, setFollower] = useState([])

    fetch(`https://api.github.com/users/satinder99`)
    .then((res)=> res.json())
    .then((res)=> {
        setData(res)
        // console.log(data)
        
    });
    fetch(`https://api.github.com/users/satinder99/followers`)
    .then((res)=> res.json())
    .then((res)=> { 
            setFollower(res)
            // console.log(follower,new Date())
    })
    return(


        <>
        <h1 className="text-center text-3xl bg-gray-600 text-white">Github followers : {data.followers}</h1>

        <img src = {data.avatar_url}/>

        <ul className="text-center text-3xl bg-gray-600 text-white">Followers:
            { follower.map((f)=> 
                <li>{f.login}</li>) }
        </ul>
        </>
    );
}