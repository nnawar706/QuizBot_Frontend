import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import Layout from "./components/Layout";
import RequireAuth from "./features/RequireAuth";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Register from "./containers/Register";
import "./styles/main.scss";

const App = () => {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* public routes */}
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
