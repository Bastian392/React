import { createContext, useState } from "react";

export const CartContext = createContext([]);

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(carritoInicial);
  const [totalPrice, setTotalPrice] = useState(0)
  const addProduct = (product) => {
    console.log("adding product", product);
    console.log(
      "cartProducts.find(item => item.id === product.id)",
      cartProducts.find((item) => item.id === product.id)
    );
    if (
      typeof cartProducts.find((item) => item.id === product.id) === "undefined"
    ) {
      setCartProducts((prev) => [...cartProducts, product]);
    } else {
      console.error("Product is already in cart");
    }
  };
  const deleteProduct = (product) => { 
    console.log('Estoy borrando un producto')
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
