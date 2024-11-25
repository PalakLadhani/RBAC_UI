import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || ""
  );

  const handleLogin = (status, role) => {
    setIsAuthenticated(status);
    setUserRole(role);
    // Store in localStorage to persist after refresh
    localStorage.setItem("isAuthenticated", status);
    localStorage.setItem("userRole", role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
  };

  useEffect(() => {
    // Check for authentication state in localStorage on initial load
    const auth = localStorage.getItem("isAuthenticated") === "true";
    const role = localStorage.getItem("userRole");
    if (auth && role) {
      setIsAuthenticated(auth);
      setUserRole(role);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/admin-dashboard"
          element={
            isAuthenticated && userRole === "admin" ? (
              <AdminDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/seller-dashboard"
          element={
            isAuthenticated && userRole === "seller" ? (
              <SellerDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/buyer-dashboard"
          element={
            isAuthenticated && userRole === "buyer" ? (
              <BuyerDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
