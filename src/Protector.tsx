import { useEffect } from "react";
import { useAuthContext } from "./Context/AuthContext"
import { useNavigate } from "react-router-dom";
export const Protector = ({ children }: any) => {
    const { setUserToken, setIsAuthenticated } = useAuthContext();
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")


        if (token) {
            setUserToken(token)
            setIsAuthenticated(true)
        }
        if (!token) {
            navigate("/login")
        }
    }, [])

    return children;
}