import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthToken } from "./authSlice";

const RequireAuth = () => {
    const token = useSelector(selectAuthToken);
    const location = useLocation()

    return (
        token ? <Outlet/> 
        : <Navigate to="/login" state={{ from: location }} replace/>
    )
}

export default RequireAuth;