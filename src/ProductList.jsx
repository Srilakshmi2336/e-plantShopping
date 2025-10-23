import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Make sure this path is correct
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({}); // Track added products

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        }
      ]
    },
    // Add other categories similarly
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch product to Redux store
    setAddedToCart(prev => ({
      ...prev,
      [product.name]: true // Mark product as added
    }));
  };

  const handleCartClick = () => setShowCart(true);
  const handleContinueShopping = () => setShowCart(false);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Logo"
          />
          <a href="/" onClick={onHomeClick} className="tag_home_link">
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>
        <div className="ul">
          <div>
            <button onClick={handleCartClick} className="cart">
              Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid or Cart */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2 className="plant_heading">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      className={`product-button ${
                        addedToCart[plant.name] ? "added-to-cart" : ""
                      }`}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
