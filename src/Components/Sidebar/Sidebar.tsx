import { Link } from "react-router-dom";
import "./Sidebar.css"; // Optional styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/staking">Staking</Link></li>
        <li><Link to="/user-profile">User Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
