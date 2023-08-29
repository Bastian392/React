import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/data";
import { CartContext } from "../../context/CartContext";

export const ProductDetail = () => {
  const { addProduct } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  console.log(product)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          console.error("ID de producto no válido");
          return;
        }
        
        const productRef = doc(db, "productos", productId);
        const productSnapshot = await getDoc(productRef);
  
        if (productSnapshot.exists()) {
          setProduct({ id: productId, ...productSnapshot.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
  
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }
  const onAddProduct = (product) => {
    addProduct(product);
    console.log(product);
  };

  return (
<div className='container-items-alone'>
      <div className="item">
       <figure>
            <img src={product.img} alt={product.nameProduct} />
       </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
          </div>
      </div>
    </div>
  );
};


