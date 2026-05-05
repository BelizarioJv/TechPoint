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
    const newCart = [...cart]; // copia o carrinho atual
    const index = newCart.findIndex((item) => item.id === productId); // pega o índice do primeiro item com esse id
    if (index !== -1) {
      newCart.splice(index, 1); // remove apenas esse item
      setCart(newCart);
    }
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
