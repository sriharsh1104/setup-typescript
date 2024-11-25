import { useAuth } from "../Authgaurd/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate(); //
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); 
  const [showModal, setShowModal] = useState<boolean>(false); 

  // Do not display Header on Login and Signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleProfileClick = () => {
    // Redirect to profile page
    navigate("/user-profile");
  };

  const handleLogoutClick = () => {
    // Show logout confirmation modal
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowModal(false);
    navigate("/login");
    // Close modal after logout
  };

  return (
    <>
      <header className="header">
        <h1>App Header</h1>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn">
            User
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleProfileClick} className="dropdown-item">
                Profile
              </button>
              <button onClick={handleLogoutClick} className="dropdown-item">
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleConfirmLogout}>Yes</button>
            <button onClick={handleModalClose}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
