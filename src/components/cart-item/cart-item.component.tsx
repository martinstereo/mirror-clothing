import React from 'react';
import {
  CartItemContainer,
  ItemDetailsContainer,
  Text,
} from './cart-item.styles';

export type CartItemProps = {
  cartItem: {
    name: string;
    quantity: number;
    imageUrl: string;
    price: number;
  };
};

const CartItem = ({ cartItem }: CartItemProps) => {
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
