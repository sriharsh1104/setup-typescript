import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppRoutes from "./Components/Routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Sidebar />
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
