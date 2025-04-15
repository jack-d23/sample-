import React from "react";

import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VisitorForm from "./components/VisitorForm";
import Home from "./Pages/HomePage/Home";
import VisitorAdminPage from "./Pages/VisitorPages/VisitorAdminPage";
import MaterialAdminPage from "./Pages/Materialpage/MaterialAdminPage";
import MaterialForm from "./components/MaterialForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/visitor">
          <Route path="admin" element={<VisitorAdminPage />} />
          <Route path="form" element={<VisitorForm />} />
        </Route>
        <Route path="/material">
          <Route path="admin" element={<MaterialAdminPage />} />
          <Route path="form" element={<MaterialForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
