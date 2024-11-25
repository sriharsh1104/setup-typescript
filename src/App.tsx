import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Components/Routes/AppRoutes";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
