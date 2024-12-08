import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, removeCartItem, clearCartItem } from '../../utils/reducer/reducer.utils';

const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  };
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updateCartItemsReducer(newCartItems));
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updateCartItemsReducer(newCartItems));
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updateCartItemsReducer(newCartItems));
};