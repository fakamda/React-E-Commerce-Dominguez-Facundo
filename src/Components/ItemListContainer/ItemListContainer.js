import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import Loader from '../Loader/Loader'


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading} = useAsync(getProductsWithCategory, [categoryId])

    
    if(loading) {
        return (
            <div className='m-auto pt-44 text-4xl text-white'>
                <Loader/>
            </div>
        )
    }

    if(error) {
        return (
            <div className='m-auto pt-44 text-4xl text-white'>
                <h1>Hubo un error</h1>
            </div>
        )
    }

    return (
        <div className="text-white m-4 pt-14">
            <h1 className="text-xl mt-2">{greeting}</h1>
            <div className="flex justify-around items-center flex-row glass">
                <div className='cont'>
                    <ItemList products={products}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer