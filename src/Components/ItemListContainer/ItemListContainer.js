import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
        })
            .catch(err => {
                console.log(err)
        })
            .finally(() => {
                setLoading(false)
        })
    }, [categoryId])

    if(loading){
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return (
        <div onClick={(e) => console.log('item list container')} className="text-white m-4 pt-14">
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