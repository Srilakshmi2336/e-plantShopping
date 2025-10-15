// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the cartReducer from your CartSlice
import cartReducer from './CartSlice';

// Create a Redux store using configureStore
const store = configureStore({
    reducer: {
        // 'cart' is the slice of state managed by cartReducer
        cart: cartReducer,
    },
});

// Export the store for use in your app
export default store;
