import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primereact/primeicons.css";

import Dashboard from './containers/Dashboard';
import Login from "./containers/Login";
import Register from "./containers/Register";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
