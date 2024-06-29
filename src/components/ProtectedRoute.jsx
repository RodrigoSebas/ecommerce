import { useContext } from "react";
import { AuthContext } from "../context/authContext";
//me redirige hacia algun lugar
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    if(user){
        return children;
    }else{
        return <Navigate to="/login"/>
    }
}

export default ProtectedRoute;