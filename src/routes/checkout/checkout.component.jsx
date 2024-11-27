import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

import React from 'react';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Checkout;
