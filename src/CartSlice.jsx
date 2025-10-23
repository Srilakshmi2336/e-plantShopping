// src/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      // Check if item already exists in cart
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        // If it exists, increase quantity by 1
        existingItem.quantity += 1;
      } else {
        // If not, add new item with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Remove item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload; // item name passed from action
      state.items = state.items.filter((item) => item.name !== itemName);
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity; // update the quantity
      }
    },
  },
});

// Export actions to use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer to use in store.js
export default cartSlice.reducer;
