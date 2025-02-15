// src/redux/features/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {OrderList} from "../utils/Constant";

// Load orders from Local Storage
const storedOrders = JSON.parse(localStorage.getItem("orders")) || OrderList;
console.log(storedOrders)

// Save to Local Storage Helper
const saveToLocalStorage = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const initialState = {
  orders: storedOrders,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      saveToLocalStorage(state.orders);
    },
  }
});

export const {
  addOrder
} = orderSlice.actions;

export default orderSlice.reducer;
