import './Item.css'
import { Link } from 'react-router-dom'


const handleClick = (e) => {
    e.preventDefault() // para prevenir el comportamiento por defecto
    e.stopPropagation() // para parar la propagacion del evento
    console.log('item')
}

const Item = ({id, name, img, price, description }) => {


    return (
        <div>
        <div onClick={handleClick} className=" bg-slate-800 bg-opacity-80 flex justify-between items-center flex-col item rounded-md z-10">
            <div className=" rounded-t-md">
                <img src={img} alt={name} className="rounded-t-md"/>
            </div>
            <div className='w-72 h-32'>
                <h3 className='font-bold text-md mt-2'>{name}</h3>
                <p className='text-sm mt-2'>{description}</p>
                <p className='text-md mt-2'> US${price}</p>
            </div>
            <div className='mb-5'>
                <Link to={`/item/${id}`} className='bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-3 px-4 rounded-full shadow-md hover:shadow-xl'>Ver Detalles</Link>
            </div>
        </div>
        </div>
    )
}

export default Item
