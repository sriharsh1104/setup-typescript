import { Link } from "react-router-dom";
import { useAuth } from "../Authgaurd/AuthContext"; // Import AuthContext for logout
import { useLocation } from "react-router-dom"; // Import useLocation to check the current route
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation(); // Get current route

  // Do not display Sidebar on Login and Signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/staking">Staking</Link>
        </li>
        <li>
          <Link to="/user-profile">User Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
