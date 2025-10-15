import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (productName) => {
    return cartItems.find((item) => item.name === productName);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h2>Products</h2>
      <p>Total items in cart: {totalItems}</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.cost}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={isInCart(product.name)}
            >
              {isInCart(product.name) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
