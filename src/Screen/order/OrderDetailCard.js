import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const OrderDetailCard = ({ orderDetails }) => {
  const orderLabels = [
    { label: "Placed By", value: orderDetails.placedBy },
    { label: "Requester", value: orderDetails.requester },
    { label: "PO/External ID", value: orderDetails.externalId },
    { label: "Requester Email ID", value: orderDetails.requesterEmail },
    { label: "Order Date", value: orderDetails.orderDate },
    { label: "Expected Date", value: orderDetails.expectedDate },
    { label: "Completion Date", value: orderDetails.completionDate },
    { label: "Service Level", value: orderDetails.serviceLevel },
  ];

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Grid container spacing={2}>
        {orderLabels.map((detail, index) => (
          <Grid item xs={4} sm={6} md={3} key={index} >
            <Typography variant="body2" fontWeight="bold">
              {detail.label}:
            </Typography>
            <Typography variant="body2">{detail.value}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrderDetailCard;
