import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth_service"
import {logout} from "../../features/authSlice"

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout()
            .then(()=>{
                dispatch(logout())
            })
            .catch((error) => {
                console.log("LogoutBrn.jsx :: logoutHandler :: Error while logging out : ", error);
            })
    }

    return (
        <button className="inline-block px-6 py-2 duration-200 hover:gb-blue-100 rounded-full">
            Logout
        </button>
    )
}

export default LogoutBtn;