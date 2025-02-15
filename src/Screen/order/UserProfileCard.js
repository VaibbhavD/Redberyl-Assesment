import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Box, Typography, Avatar, Divider, Paper, useMediaQuery } from "@mui/material";

const UserProfileCard = ({ user }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Paper variant="outlined" sx={{ p: 2, width: isMobile ? "100%" : "auto" }}>
      <Box display="flex" alignItems="center">
        <Avatar src={user.photo} alt="User" sx={{ width: 40, height: 40, mr: 2 }} />
        <Box>
          <Typography fontSize={16} fontWeight={600}>{user.name}</Typography>
          <Typography fontSize={14} sx={{ color: user.status === "online" ? "green" : "red" }}>{user.status}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="body2" display="flex" alignItems="center" my={1}>
          <MdOutlineMail className="text-lg text-blue-500" style={{ marginRight: 8 }} />
          {user.email}
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center" my={1}>
          <FaPhoneAlt className="text-md text-blue-500" style={{ marginRight: 8 }} />
          {user.phone}
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center" my={1}>
          <IoLocationSharp className="text-lg text-blue-500" style={{ marginRight: 8 }} />
          {user.address}
        </Typography>
      </Box>
    </Paper>
  );
};

export default UserProfileCard;
