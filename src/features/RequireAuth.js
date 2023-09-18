import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { authSlice } from "./auth/authSlice";

const RequireAuth = () => {
    const { authToken } = useSelector(
        (state) => state.auth
    );
    const location = useLocation()

    return (
        authToken ? <Outlet/> 
        : <Navigate to="/login" state={{ from: location }} replace/>
    )
}

export default RequireAuth;