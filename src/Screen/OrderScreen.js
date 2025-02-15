import React, { useState } from "react";
import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TabHeader from "./order/TabHeader";
import UserProfileCard from "./order/UserProfileCard";
import OrderDetailCard from "./order/OrderDetailCard";
import OrderMainHeader from "./order/OrderMainHeader";
import FilterAndSearching from "../components/FilterAndSearching";
import OrderCard from "./order/OrderCard";
import OrderSave from "./order/OrderSave";
import OrderForm from "../components/Form";

const user = {
  photo:
    "https://png.pngtree.com/png-clipart/20230330/ourmid/pngtree-woman-profile-silhouette-black-png-image_6660698.png",
  name: "John Doe",
  status: "online",
  email: "abc@xyz.com",
  phone: "(123) 456-7890",
  address: "123 Main Street, Anytown, USA",
};

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders); // Fetch from Redux

  const [searchValue, setSearchValue] = useState("");
  const [selectedDomicile, setSelectedDomicile] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [orderDetails, setOrderDetails] = useState(null);
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleOrderSelect = (orderData) => {
    setOrderDetails(orderData);
  };

  // Filter Orders Based on Search & Filters
  const filteredOrders = orders.filter((order) => {
    return (
      (searchValue === "" ||
        order.company.toLowerCase().includes(searchValue.toLowerCase())) &&
      (selectedDomicile === "All" || order.country === selectedDomicile) &&
      (selectedCompany === "All" || order.company === selectedCompany) &&
      (selectedStatus === "All" || order.status === selectedStatus)
    );
  });

  return (
    <>
      <Box bgcolor="white" px={2} py={1}>
        <OrderMainHeader setOpen={setOpen} />
        <FilterAndSearching
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectedDomicile={selectedDomicile}
          setSelectedDomicile={setSelectedDomicile}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <Grid
          container
          spacing={2}
          mt={2}
          direction={isMobile ? "column" : "row"}
        >
          <Grid item xs={12} md={4}>
            <Paper
              variant="outlined"
              sx={{ padding: 2, height: isMobile ? "auto" : "100%" }}
            >
              <OrderCard
                orders={filteredOrders}
                onOrderSelect={handleOrderSelect}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Paper variant="outlined">
                {orderDetails && <OrderSave orderDetails={orderDetails} />}
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: 2,
                  padding: 2,
                }}
              >
                {orderDetails && (
                  <OrderDetailCard orderDetails={orderDetails} />
                )}
                <UserProfileCard user={user} />
              </Paper>
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <TabHeader />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {open && <OrderForm open={open} setOpen={setOpen} />}
    </>
  );
};

export default OrderScreen;
