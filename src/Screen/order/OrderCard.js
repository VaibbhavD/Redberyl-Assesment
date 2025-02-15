import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { ShowStatus, STATUSES } from "../../utils/ShowStatus";

const OrderCard = ({ orders, onOrderSelect }) => {
  return (
    <>
      {orders.length === 0 ? (
        <Typography sx={{ textAlign: "center", py: 2 }}>No Orders Found</Typography>
      ) : (
        orders.map((detail, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
              borderBottom: "1px solid #e0e0e0",
              "&:hover": {
                backgroundColor: "#d8d8d8",
              },
            }}
            onClick={() => onOrderSelect(detail)}
          >
            <Box sx={{ mx: 2 }}>
              <Typography fontWeight={600}>{detail.id} </Typography>
              <Typography fontSize={14}>{detail.company}</Typography>
            </Box>
            <ShowStatus status={STATUSES[detail.status.toUpperCase()]} />
            <IconButton>
              <IoIosArrowForward />
            </IconButton>
          </Box>
        ))
      )}
    </>
  );
};

export default OrderCard;
