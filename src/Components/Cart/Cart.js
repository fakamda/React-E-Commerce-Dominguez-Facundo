import { useCart } from '../../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';


const Cart = ({greeting}) => {
    const { cart, removeItem, total } = useCart();
    const { clearCart } = useCart();

 


    return (
        <div className='flex flex-col m-20 pt-14 justify-center items-center content back backdrop-blur-2xl'>
            <h1 className='text-white text-2xl mb-14'>{greeting}</h1>
            <div className=''>
                {
                    cart.map(prod => {
                        return (
                            <div className='border-2 border-purple-500 bg-slate-800 text-slate-50 flex justify-between items-center gap-4 px-14 rounded m-4' key={prod.id}>
                                <h2>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <div>
                                    <img src={prod.img} />
                                </div>
                                <h2>{prod.price} x unidad</h2>
                                <div>
                                    <button className='bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-3 px-4 rounded-full shadow-md hover:shadow-xl m-4' onClick={() => removeItem(prod.id)}>eliminar</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <h1 className='text-white text-lg m-3'>Total de la compra: ${total}</h1>
            <button className='bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded m-3' onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout" className='bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded m-3'>Checkout</Link>
        </div>
        

        
    )
}

export default Cart
