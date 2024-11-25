import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Staking from "../Pages/Staking/Staking";
import Settings from "../Pages/Setting/Settings";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Public/SignIn/Signin";
import Signup from "../Pages/Public/Signup/Signup";
import PrivateRoute from "../Authgaurd/PrivateRoutes/PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/staking"
        element={
          <PrivateRoute>
            <Staking />
          </PrivateRoute>
        }
      />
      <Route
        path="/user-profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
