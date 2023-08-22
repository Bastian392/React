import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data/data';

const Product = () => {
  console.log('useParams.id', useParams().id)
  const productId = parseInt(useParams().id)
  const [product, setProduct] = useState({img:'',nameProduct:'', price:''})

  useEffect(()=>{

    setProduct(data.find(pr => pr.id === productId))
  },[product])

  const onAddProduct = () => {
    console.log('hice click en añadir')
  }
  return (
    <div style={{maxWidth:'80%'}}>
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
  )
}
export default Product;
