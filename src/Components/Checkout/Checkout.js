// import React from 'react'
// import { useCart } from '../../context/CartContext'
// import {collection, documentId, query, where, getDocs, writeBatch, addDoc} from 'firebase/firestore'
// import { db } from "../../services/firebase/firebaseConfig"
// import { useState } from 'react'
// import { useNotification } from "../../notification/NotificationService"
// import { useNavigate } from 'react-router-dom'
// import ContactForm from '../ContactForm/ContactForm'

// const Checkout = () => {
//     const [orderId, setOrderId] = useState('')
//     const [loading, setLoading] = useState(false)
//     const {cart, total, clearCart} = useCart()
    
//     const { setNotification } = useNotification()

//     const navigate = useNavigate()

//     const createOrder = async (userData) => {
//         try{
//             const objOrder = {
//                 buyer: userData,
//                 items: cart ,
//                 total
//             }
    
//             const ids = cart.map(prod => prod.id)
    
//             const productsRef = query(collection(db, 'products'), where(documentId(),'in', ids))
    
//             const { docs } = await getDocs(productsRef)
    
//             const batch = writeBatch(db)
//             const outOfStock = []
    
//             docs.forEach(doc =>{
//                 const dataDoc = doc.data
//                 const stockDb = dataDoc.stock
    
//                 const productAddedToCart = cart.find(prod => prod.id === doc.id)
//                 const prodQuantity = productAddedToCart?.quantity
    
//                 if(stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity })
//                 }else{
//                     outOfStock.push({ id: doc.id, ...dataDoc })
//                 }
    
//             })
    
//             if(outOfStock.length === 0){
//                 batch.commit()
    
//                 const orderRef = collection(db, 'orders')
    
//                 const orderAdded = addDoc(orderRef, objOrder)

//                 clearCart()
    
//                 setOrderId(orderAdded.id)

//                 setTimeout(()=> {
//                     Navigate('/')
//                 }, 5000)

//             }else{

//                 setNotification('error' , 'hay productos que no tienen stock')
//             }
            
//         }catch(error){

//             setNotification('error' , 'hubo un error generando la orden')
//         }finally{

//             setLoading(false)
//         }
//     }

//     if(loading){
//         return (
//             <div>
//                 <h1>Se esta generando su orden...</h1>
//             </div>
//         )
//     }

//     if(orderId) {
//         return (
//             <div>
//                 <h1>EL ID DE SU COMPRA ES {orderId}</h1>
//             </div>
//         )
//     }

//   return (
//     <div>
//         <h1>Checkout</h1>
//         <h2>ingrese Sus Datos</h2>
//         {/* <form onConfirm></form> */}
//         <ContactForm/>
//     </div>
//   )
// }

// export default Checkout