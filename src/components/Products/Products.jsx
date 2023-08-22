import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { CartContext } from "../../context/CartContext";

export const Products = () => {
  const { addProduct } = useContext(CartContext);

  const onAddProduct = (product) => {
    addProduct(product);
    console.log(product);
  };

  return (
    <div className='container-items'>
      {data.map((product) => (
        <><div>
          <Link
            className="item"
            key={product.id}
            to={"/producto/" + product.id}
          >
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
        </>
      ))}
    </div>
  );
};
