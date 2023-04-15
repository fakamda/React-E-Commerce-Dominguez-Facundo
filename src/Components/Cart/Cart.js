import { useCart } from '../../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";



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
                            <div className='border-2 border-purple-500 bg-slate-800 hover:bg-slate-700 text-slate-50 text-lg flex justify-between items-center gap-6 px-32 rounded m-4 h-20' key={prod.id}>
                                <h2>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <div>
                                    <img src={prod.img} />
                                </div>
                                <h2>US$ {prod.price * prod.quantity}</h2>
                                <div>
                                    <GiCrossMark className='text-red-600 hover:text-red-500 text-3xl' onClick={() => removeItem(prod.id)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <h1 className='text-white text-lg m-3'>Total de la compra: US${total}</h1>
            <button className='bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded m-3' onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout" className='bg-fuchsia-700 hover:bg-fuchsia-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded m-3'>Checkout</Link>
        </div>
        
            
        
    )
}

export default Cart
