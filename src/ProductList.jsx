import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();

  // You can replace this with API data later
  const products = [
    {
      name: 'Apple iPhone 15',
      cost: 999,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-model-select-2023?wid=940&hei=1112&fmt=png-alpha&.v=1692925202752'
    },
    {
      name: 'Samsung Galaxy S24',
      cost: 899,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkdins-539254355?$650_519_PNG$'
    },
    {
      name: 'Google Pixel 9',
      cost: 799,
      image: 'https://store.google.com/product/images/google_pixel_9_hero.png'
    },
    {
      name: 'OnePlus 12',
      cost: 749,
      image: 'https://image01.oneplus.net/ebp/202401/02/1-m00-56-1c-cpgm7lm2moeajlrvaab1g5y3vkk997.png'
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-list-container">
      <h1 style={{ color: 'black' }}>Available Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-cost">${product.cost}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
