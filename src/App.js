import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import "primereact/resources/themes/saga-green/theme.css"
import "primereact/resources/primereact.min.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import RequireAuth from "./features/RequireAuth"
import Dashboard from "./containers/Dashboard"
import Login from "./containers/Login"
import Register from "./containers/Register"
import RoomDashboard from "./containers/RoomDashboard"
import "./styles/main.scss"
import { userRefresh } from "./features/auth/refreshAuthAction"

const App = () => {
  const { authInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const current_token = authInfo.authToken
  
  // useEffect(() => {
  //   if (!current_token) {
  //     const refresh = localStorage.getItem("refreshToken")
      
  //     if (refresh) {
  //       dispatch(userRefresh({refresh}))
  //     }
  //   }
  // }, [current_token, dispatch])

  return (
    <Router>
      <Routes>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="" element={<Dashboard />} />
            <Route path="room/:id" element={<RoomDashboard />} />
          </Route>
      </Routes>
    </Router>
  );
};

export default App;
