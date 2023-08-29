import React, { useContext, useEffect, useState } from "react";
import { CartContext } from '../../context/CartContext'
import "./Checkout.css"

export default function Checkout() {
  const {cartProducts, clearCart, deleteProduct} = useContext(CartContext)
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
		let subTotal = 0
		cartProducts.forEach(element => {
			console.log('element', element)
			subTotal = subTotal + element.price
		});	
		setTotalPrice(subTotal)
	},[totalPrice,cartProducts])

  const onDeleteProduct = product => {
		deleteProduct(product)
	};

	const onCleanCart = () => {
		clearCart()
	};  

  return (
    <div className="cart-container">
      {cartProducts.length ? (
        <>
          <div className="cart-product-checkout">
            {cartProducts.map((product) => (
              <div className="cart-product-checkout" key={product.id}>
                  <img src={product.img} alt={product.nameProduct} />
                <div className="product-details">
                  <p>{product.nameProduct}</p>
                  <span>${product.price}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-close"
                  onClick={() => onDeleteProduct(product)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ))}
          </div>
  
          <div className="cart-total-checkout">
            <h3>Total:</h3>
            <span>${totalPrice}</span>
          </div>
  
          <button className="btn-clear-all-checkout" onClick={() => onCleanCart()}>
            Vaciar Carrito
          </button>
        </>
      ) : (
        <p className="cart-empty-checkout">El carrito está vacío</p>
      )}
    </div>
  );
}
