import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, img, price, quantity
        }
        if(stock !== 0){
            addItem(productToAdd)
            setNotification('success', `Se agrego correctamente ${quantity} ${name}`, 20)
        } else {
            setNotification('error', `El producto ${name} se encuentra sin stock `, 20)
        }
       
    }

    return (

        <div className=" bg-slate-800 text-white flex justify-between items-center flex-row-reverse itemDetail">
            {
                stock === 0 
                ? <span class="bg-pink-100 text-purple-pink text-xs font-medium mr-2 px-7 py-2 rounded dark:bg-gray-700 dark:text-pink-600 border border-pink-600 absolute z-10 -translate-y-64">SIN STOCK</span> 
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
                    <ItemCount onAdd={handleOnAdd} stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail