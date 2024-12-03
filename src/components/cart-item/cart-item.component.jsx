import {
  CartItemContainer,
  ItemDetailsContainer,
  Text,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetailsContainer>
        <Text>{name}</Text>
        <Text>
          {quantity} X ${price}
        </Text>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
