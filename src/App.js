import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./utils/MainLayout";
import OrderScreen from "./Screen/OrderScreen";
import Dashboard from "./Screen/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<OrderScreen />} />
          <Route path="*" element={<OrderScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
