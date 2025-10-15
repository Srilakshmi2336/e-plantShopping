import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = () => {
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: {item.cost}</p>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>Subtotal: ${calculateTotalCost()}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
