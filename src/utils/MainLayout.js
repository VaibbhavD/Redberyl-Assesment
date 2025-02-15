import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import { Box, Drawer, useMediaQuery } from "@mui/material";

const drawerWidth = 250; // Sidebar width
const navbarHeight = 64; // Adjust based on Navbar height

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Fixed Navbar */}
      <Navbar onMenuClick={handleDrawerToggle} />

      <Box sx={{ display: "flex", width: "100%", pt: `${navbarHeight}px`, flexGrow: 1 }}>
        {/* Sidebar as a drawer on mobile */}
        {isMobile ? (
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
          >
            <Sidebar handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        ) : (
          // Static sidebar on larger screens
          <Box
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              height: "100vh",
              position: "fixed",
              top: navbarHeight,
              bgcolor: "white",
            }}
          >
            <Sidebar />
          </Box>
        )}

        {/* Main content area, shifted when sidebar is static */}
        <Box sx={{ flexGrow: 1, p: 2, ml: isMobile ? 0 : `${drawerWidth}px` }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
