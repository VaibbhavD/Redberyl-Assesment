import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = ({ onMenuClick }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1, zIndex: 1201 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {isMobile && (
            <IconButton onClick={onMenuClick} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography fontSize={25} fontWeight={600} sx={{ color: "black" }}>
            LOGO
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <FaBell style={{ fontSize: '1.75rem', color: 'black' }} />
          </IconButton>
          <IconButton>
            <CgProfile style={{ fontSize: '1.75rem', color: 'black' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
