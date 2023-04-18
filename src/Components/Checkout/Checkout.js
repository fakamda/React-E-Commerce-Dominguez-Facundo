import React from 'react'
import { useCart } from '../../context/CartContext'
import {collection, documentId, query, where, getDocs, writeBatch, addDoc} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from 'react'
import { useNotification } from "../../Notification/NotificationService"
import { useNavigate } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'
import Loader from '../Loader/Loader'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(ordersRef, objOrder)
                
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                setNotification('error', 'Hay productos que no tienen stock', 10)
            }
        } catch (error) {
            setNotification('error', 'Hubo un error generando la orden', 10)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return (
            <div className='m-auto pt-44 text-4xl text-white'>
                <Loader/>
                <h2 className='text-white text-2xl'>Se esta generando la orden...</h2>
            </div>
        )
    }

    if(orderId) {
        return (
            <div>
                <h1 className='text-white text-2xl'>EL ID DE TU COMPRA ES EL: {orderId}</h1>
            </div>
        )
    }

  return (
    <div className='pt-24 flex justify-center items-center flex-col'>
        <h2 className='text-white text-xl'>ingrese Sus Datos</h2>
        <ContactForm onConfirm={createOrder}/>
    </div>
  )
}

export default Checkout