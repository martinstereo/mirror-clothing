import { createContext, useState, useEffect } from 'react';

export const AddCartItem = (cartItems, productToAdd) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (foundCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const ReduceCartItem = (cartItems, productToReduce) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToReduce.id
  );
  if (foundCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToReduce, quantity: 0 }];
};

export const RemoveCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(AddCartItem(cartItems, productToAdd));
  };

  const reduceItemQuantity = (productToReduce) => {
    setCartItems(ReduceCartItem(cartItems, productToReduce));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(RemoveCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    reduceItemQuantity,
    removeItemFromCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
