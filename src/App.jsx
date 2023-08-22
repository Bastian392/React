
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";
import { Products } from "./components/Products/Products.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout.jsx";
import Product  from "./components/Products/Product.jsx";
import NavbarTop from "./components/NavbarTop/NavbarTop.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider value={{cartProducts:[], addProduct:()=>{}}}>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/productos/" element={<Products/>} />
          <Route path="/producto/:id" element={<Product/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
