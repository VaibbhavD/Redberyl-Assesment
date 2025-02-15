import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../utils/Constant";
import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

const Sidebar = ({ handleDrawerToggle }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ width: 250, p: 2, height: "100%", bgcolor: "white", borderRight: "1px solid lightgray" }}>
      {isMobile && (
        <IconButton onClick={handleDrawerToggle} sx={{ float: "right" }}>
          <CloseIcon />
        </IconButton>
      )}
      <List sx={{ mt: isMobile ? 4 : 0 }}>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "blue" : "black",
            })}
          >
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                "&:hover": {
                  bgcolor: "lightgray",
                },
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
