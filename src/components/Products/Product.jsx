import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import { CartContext } from "../../context/CartContext";

const Product = () => {
  console.log('useParams.id', useParams().id)
  const productId = parseInt(useParams().id)
  const [product, setProduct] = useState({img:'',nameProduct:'', price:''})
  const { addProduct } = useContext(CartContext);


  useEffect(()=>{
    setProduct(data.find(pr => pr.id === productId))
  },[product])

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
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
      </div>
    </div>
  )
}
export default Product;
