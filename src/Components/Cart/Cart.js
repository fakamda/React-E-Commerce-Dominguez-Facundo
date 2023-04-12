// import { useCart } from '../../context/CartContext';
// import { Link } from 'react-router-dom';


// const Cart = () => {
//     const { totalPrice, cart, removeItem, totalQuantity } = useCart();
//     const { clearCart } = useCart();
//     return (
//         <div>
//             <div>
//                 {
//                     cart.map(prod => {
//                         return (
//                             <div key={prod.id}>
//                                 <h2>{prod.name}</h2>
//                                 <h2>Cantidad: {prod.quantity}</h2>
//                                 <h2>{prod.price} x unidad</h2>
//                                 <button onClick={removeItem}>eliminar</button>
//                             </div>
//                         )
//                     })
//                 }
//             </div>

//             <h1>Total de la compra:{total}</h1>
//             <button onClick={clearCart}>Vaciar Carrito</button>
//             <Link to="/checkout">Checkout</Link>
//         </div>
        

        
//     )
// }

// export default Cart
