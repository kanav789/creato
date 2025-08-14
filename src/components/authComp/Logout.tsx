import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";


export default function Logout() {
     const {userToken,setUserToken} = useAuthContext()
     const navigate =useNavigate()
     if(userToken){
        localStorage.removeItem("token")
        setUserToken("")
        navigate("/")
     }
     return null;
}