import { createContext, useState } from "react";

export const CartContext = createContext([]);

// Recuperar informacion del carrito en LocalStorage
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(carritoInicial);
  const [totalPrice, setTotalPrice] = useState(0)
  // Agregar producto al carrito
  const addProduct = (product) => {
    if (
      typeof cartProducts.find((item) => item.id === product.id) === "undefined"
    ) {
      setCartProducts((prev) => [...cartProducts, product]);
    } else {
      console.error("Product is already in cart");
    }
  };
  // Eliminar producto 
  const deleteProduct = (product) => { 
    const results = cartProducts.filter(
        item => item.id !== product.id
    );
    setTotalPrice(totalPrice - product.price * product.quantity);
    setCartProducts(results);
  }

  const clearCart = () => {
    console.log('Estoy borrando el carrito')
    setTotalPrice(0)
    setCartProducts([])
  };
  return (
    <CartContext.Provider
      value={{ cartProducts, addProduct, deleteProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
