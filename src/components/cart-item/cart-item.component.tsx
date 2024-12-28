import React from 'react';
import { CartItemContainer, ItemDetailsContainer, Text } from './cart-item.styles';
import { CartItem as CartItemType } from '../../store/cart/cart.types';

export type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img
        src={imageUrl}
        alt={`${name}`}
      />
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
