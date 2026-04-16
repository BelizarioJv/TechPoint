import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function totalItems() {
    return cart.length;
  }

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(productId) {
    setCart(cart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
      }}>
      {children}
    </CartContext.Provider>
  );
}
