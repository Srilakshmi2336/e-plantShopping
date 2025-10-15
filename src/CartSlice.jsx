// src/CartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  items: []
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a new item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);
      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Remove an item from the cart by name
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },

    // Update quantity of an existing item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to use in store.js
export default cartSlice.reducer;
