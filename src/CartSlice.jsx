import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    items:[];
};

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload;
            const existingItem=state.items.find(
                (item) =>item.name===newItem.name
            );
            if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== nameToRemove);
    },

     updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = amount;
      }
    },
        }
    }
)


export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
