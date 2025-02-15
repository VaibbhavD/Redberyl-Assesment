import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Modal,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addOrder } from "../features/orderSlice";

const CountryOptions = [
  { value: "All", label: "All" },
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "UK", label: "UK" },
  { value: "India", label: "India" },
  { value: "Germany", label: "Germany" },
];

const companyOptions = [
  { value: "All", label: "All" },
  { value: "TL Flex Holdings LLC", label: "TL Flex Holdings LLC" },
  { value: "TL Flex LLC", label: "TL Flex LLC" },
  { value: "SL Flex Holdings", label: "SL Flex Holdings" },
];

const statusOptions = [
  { value: "All", label: "All" },
  { value: "InProgress", label: "In Progress" },
  { value: "Completed", label: "Completed" },
  { value: "Pending", label: "Pending" },
  { value: "Approval Pending", label: "Approval Pending" },
  { value: "Draft", label: "Draft" },
  { value: "Review", label: "Review" },
];

const OrderForm = ({ open, setOpen, order }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    company: "All",
    status: "All",
    placedBy: "",
    requester: "",
    externalId: "",
    requesterEmail: "",
    orderDate: "",
    expectedDate: "",
    completionDate: "",
    serviceLevel: "",
    country: "All",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Assign a unique ID to the new order
    const newOrder = { ...formData, id: Date.now().toString() };
  
    // Dispatch action to add new order
    dispatch(addOrder(newOrder));
  
    // Close the modal
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          {formData.id ? "Edit Order" : "New Order"}
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <TextField
            select
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            fullWidth
          >
            {CountryOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          >
            {companyOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
          >
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Placed By"
            name="placedBy"
            value={formData.placedBy}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Requester"
            name="requester"
            value={formData.requester}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="External ID"
            name="externalId"
            value={formData.externalId}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Requester Email"
            name="requesterEmail"
            type="email"
            value={formData.requesterEmail}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Order Date"
            name="orderDate"
            type="date"
            value={formData.orderDate}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Expected Date"
            name="expectedDate"
            type="date"
            value={formData.expectedDate}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Completion Date"
            name="completionDate"
            type="date"
            value={formData.completionDate}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Service Level"
            name="serviceLevel"
            value={formData.serviceLevel}
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {formData.id ? "Update Order" : "Save Order"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default OrderForm;
