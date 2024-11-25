import { useAuth } from "../Authgaurd/AuthContext";
import { useLocation } from "react-router-dom"; // Import useLocation to check the current route
// import "./Header.css";

const Header = () => {
  const { isAuthenticated, logout } = useAuth(); // Access auth state and logout function
  const location = useLocation(); // Get current route

  // Do not display Header on Login and Signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <header className="header">
      <h1>App Header</h1>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </header>
  );
};

export default Header;
