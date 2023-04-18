import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'
import { useNotification } from '../../Notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, img, price, quantity
        }
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    return (
        <div className=" bg-slate-800 text-white flex justify-between items-center flex-row-reverse itemDetail">
            {
                stock === 0 
                ? <span class="bg-pink-100 text-purple-pink text-xs font-medium mr-2 px-10 py-2 rounded dark:bg-gray-700 dark:text-pink-500 border border-pink-500 absolute z-10 -translate-y-64">SIN STOCK</span> 
                : ''
            }
            
            <img src={img} alt={name}/>
            <div className='flex flex-col justify-evenly m-auto gap-6'>
                <h4 className='text-xl'>{name}</h4>
                <p>{description}</p>
                <p>Tipo: {category}</p>
                <p>Cantidad en Stock: {stock}</p>
                <h4 className='text-xl font-bold'> US${price}</h4>
                <div>
                    {
                        isInCart(id) ? (
                            <Link className='bg-transparent hover:bg-purple-500 text-white font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded' to='/cart'>Terminar compra</Link>
                        ) : (
                            <ItemCount onAdd={handleOnAdd} stock={stock} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail