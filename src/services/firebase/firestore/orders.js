// import { useCart } from "../../../context/CartContext"
// import { collection, documentId, query, where, getDocs, writeBatch, addDoc } from "firebase/firestore"
// import { db } from "../firebaseConfig"
// import { useNotification } from "../../../Notification/NotificationService"

// export const useOrders = () => {
//     const { cart, total } = useCart()

//     const { setNotification } = useNotification()

    
//     const createOrder = async (userData) => {
//         try {
//             const objOrder = {
//                 buyer: userData,
//                 items: cart,
//                 total
//             }
    
//             const ids = cart.map(prod => prod.id)
    
//             const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
//             const { docs } = await getDocs(productsRef)
            
//             const batch = writeBatch(db)
//             const outOfStock = []
    
//             docs.forEach(doc => {
//                 const dataDoc = doc.data()
//                 const stockDb = dataDoc.stock
    
//                 const productAddedToCart = cart.find(prod => prod.id === doc.id)
//                 const prodQuantity = productAddedToCart?.quantity
    
//                 if(stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity})
//                 } else {
//                     outOfStock.push({ id: doc.id, ...dataDoc})
//                 }
//             })
    
//             if(outOfStock.length === 0) {
//                 const ordersRef = collection(db, 'orders')
//                 const orderAdded = await addDoc(ordersRef, objOrder)
//                 batch.commit()
//                 return { result: 'orderCreated', id: orderAdded.id }
//             } else {
//                 return { result: 'outOfStockError', products: outOfStock }
//             }
//         } catch (error) {
//             return error
//         }
        
//     }

//     return { createOrder}

// }