import React from "react";
import { Box, Typography } from "@mui/material";
import { PiPencilLineFill } from "react-icons/pi";
import { GrDownload } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import CustomButton from "../../components/CustomButton";

const OrderMainHeader = ({setOpen}) => {
  return (
    <Box sx={{ width: "100%", mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box>
        <Typography variant="h4" fontWeight={600}>
          Orders
        </Typography>
        <Typography fontSize={14} >
          Manage all your order here
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <CustomButton
          label="View Draft"
          onClick={() => alert("View Draft")}
          hasIcon={true}
          icon={<PiPencilLineFill />}
        />
        <CustomButton
          label="Export CSV"
          onClick={() => alert("Exported CSV")}
          hasIcon={true}
          icon={<GrDownload />}
        />
        <CustomButton
          label="Create New Order"
          onClick={() => setOpen(true)}
          hasIcon={true}
          variant="contained"
          icon={<FiPlus />}
        />
      </Box>
    </Box>
  );
};

export default OrderMainHeader;
