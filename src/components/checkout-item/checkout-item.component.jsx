import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import {
  Quantity,
  CheckoutItemContainer,
  ImageContainer,
  ArrowContainer,
  TextSpan,
  RemoveButton,
  QuantityValue,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { removeItemToCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const handleAddCartItem = () => addItemToCart(cartItem);
  const handleRemoveCartItem = () => removeItemToCart(cartItem);
  const handleClearCartItem = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TextSpan>{name}</TextSpan>
      <Quantity>
        <ArrowContainer onClick={handleRemoveCartItem}>&#10094;</ArrowContainer>
        <QuantityValue>{quantity}</QuantityValue>
        <ArrowContainer onClick={handleAddCartItem}>&#10095;</ArrowContainer>
      </Quantity>
      <TextSpan>$ {price}</TextSpan>
      <RemoveButton onClick={handleClearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
