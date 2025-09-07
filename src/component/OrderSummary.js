import { useSelector } from 'react-redux';

const OrderSummary = ({totalPrice}) => {
  const cartItems = useSelector(store => store.cart.items);
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;

  return (
    <div className='order-summary'>
      <h2 className='summary-title'>Order Summary</h2>

      <div className='order-details'>
        <div className='detail-row'>
          <p>Price ({cartItems.length} items)</p>
          <p>₹ {totalPrice / 100}</p>
        </div>
        <div className='detail-row'>
          <p>Discount (10%)</p>
          <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
        </div>
        <div className='detail-row'>
          <p>Delivery charges (5%)</p>
          <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
        </div>
        <p className='savings-msg'>
          You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p>
      </div>

      <div className='total-amount'>
        <h1>Total Amount</h1>
        <h1 className='orange-text'>
          ₹ {parseFloat(totalAmt).toFixed(2)}
        </h1>
      </div>

      <button className='place-order-btn'>
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
