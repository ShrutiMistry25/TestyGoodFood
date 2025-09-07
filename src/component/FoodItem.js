import React, { useState, useEffect } from "react";
import { RESTAURANT_IMG_CDN_URL } from "../utils/Contant";

const FoodItem = ({
  imageId,
  name,
  price,
  quantity,
  handleIncrement,
  handleDecrement,
}) => {
  const [totalPrice, setTotalPrice] = useState(price * quantity);

  useEffect(() => {
    const newTotalPrice = price * quantity;
    setTotalPrice(newTotalPrice);
  }, [price, quantity]);

  return (
    <div className="cart-menu">
      <img
        className="cart-image"
        src={RESTAURANT_IMG_CDN_URL + imageId}
        alt={name}
      />
      <h3 className="cart-name">{name}</h3>
      <h4 className="cart-price">
        Price:{" "}
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price / 100)}
      </h4>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <h4 className="cart-total">
        Total:{" "}
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(totalPrice / 100)}
      </h4>
    </div>
  );
};

export default FoodItem;
