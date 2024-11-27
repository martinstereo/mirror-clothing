import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { removeItemFromCart, addItemToCart, reduceItemQuantity } =
    useContext(CartContext);

  const handleReduce = () => reduceItemQuantity(cartItem);
  const handleIncrease = () => addItemToCart(cartItem);
  const handleRemove = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <button onClick={handleReduce}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
      <span>{price}</span>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};

export default CheckoutItem;
