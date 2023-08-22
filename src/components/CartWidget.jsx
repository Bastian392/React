import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {

	const {cartProducts, clearCart, deleteProduct} = useContext(CartContext)
	console.log('cartProducts', cartProducts)
	
	const [totalPrice,setTotalPrice] = useState(0)

	const [active, setActive] = useState(false);
	console.log('cartProducts', cartProducts)
	console.log('totalPrice', totalPrice)


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
/* 		const results = cartProducts.filter(
			item => item.id !== product.id
		);

		setTotal(totalPrice - product.price * product.quantity);
		setproductCount(productCount - product.quantity);
		setcartProducts(results); */
	};

	const onCleanCart = () => {
		clearCart()
/* 		setcartProducts([]);
		setTotal(0);
		setproductCount(0); */
	};  

	const onChangeQuantity = (input) => {
		console.log('input.target', input)

	}

	return (
		<div className="cart">
			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{cartProducts.length}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{cartProducts.length ? (
						<>
							<div className='row-product'>
								{cartProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<input itemID={product.id} type='number' className='cantidad-producto-carrito' value={product.quantity} onChange={(product) => onChangeQuantity(product)}/>
											
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${totalPrice}</span>
							</div>

							<button className='btn-clear-all' onClick={()=>onCleanCart()}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</div>
	);
};