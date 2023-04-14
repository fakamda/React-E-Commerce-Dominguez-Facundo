import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
 
    return(
        <div className=''>          
             <div className='flex justify-center mb-4'>
                 <button className="bg-purple-700 py-1 px-2 rounded-l-md hover:bg-purple-500" onClick={decrement}>-</button>
                 <h4 className='bg-white text-black font-medium py-1 px-2'>{quantity}</h4>
                 <button className="bg-purple-700 py-1 px-2 rounded-r-md hover:bg-purple-500" onClick={increment}>+</button>
             </div>
             <div>
                 <button className='bg-purple-600 hover:bg-purple-500 font-semibold text-white shadow-md hover:shadow-2xl py-3 px-6 rounded-full' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
             </div>
        </div>
    )
 
 }
 export default ItemCount
 