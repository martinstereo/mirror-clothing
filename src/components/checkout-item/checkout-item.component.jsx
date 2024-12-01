import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { removeItemToCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const handleAddCartItem = () => addItemToCart(cartItem);
  const handleRemoveCartItem = () => removeItemToCart(cartItem);
  const handleClearCartItem = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={handleRemoveCartItem}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleAddCartItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleClearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
