import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem, removeItem } from "../utils/CartSlice";
import OrderSummary from "./OrderSummary";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0); // State to hold total price

  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // Save cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Calculate total price
    const newTotalPrice = cartItems.reduce(
      (acc, item) => acc + (item.price * (quantities[item.id] || 1)),
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems, quantities]);

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearItem());
    toast("All items removed from the cart", {
      style: {
        marginTop : "80px"
      }});
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Pass the item itself as payload
    toast("Item removed from the cart", {
      style: {
        marginTop : "80px"
      }});
  };

  return (
    <>
      <ToastContainer /> {/* Toast notification container */}
      <div className="cart-item">
        <h1 className="cart-heading">Cart</h1>
        <button onClick={handleClearCart} className="cart-btn-remove-all">
          Clear All Items
        </button>
        {cartItems.map((item, index) => (
          <div className="one-cart" key={index}>
            <FoodItem
              {...item}
              quantity={quantities[item.id] || 1}
              handleIncrement={() => handleIncrement(item.id)}
              handleDecrement={() => handleDecrement(item.id)}
            />
            <button
              onClick={() => handleRemoveItem(item)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
        <OrderSummary totalPrice={totalPrice} />{" "}
        {/* Pass totalPrice to OrderSummary */}
      </div>
    </>
  );
};

export default Cart;
