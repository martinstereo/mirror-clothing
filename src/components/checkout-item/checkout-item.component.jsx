import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';

import { selectCartItems } from '../../store/cart/cart.selector';

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, quantity, price } = cartItem;

  const handleAddCartItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveCartItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const handleClearCartItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

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
