import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Products.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/data";
import {ProductDetail} from "./ProductDetail";

export const Products = () => {
  const { addProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const onAddProduct = (product) => {
    addProduct(product);
    console.log(product);
  };

  return (
    <div className="container-items">
      {products.map((product) => (
        <div key={product.id}>
          <Link className="item" to={`/producto/${product.id}`}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
          </Link>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
            
          </div>
        </div>
      ))}

      {/* Configura la ruta para el detalle del producto con react-router-dom v6 */}
      <Routes>
        <Route path="/producto/:productId" element={<ProductDetail onAddProduct={onAddProduct} />} />
      </Routes>
    </div>
  );
};