import './ItemListContainer.css'
// import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
// import { collection, getDocs, query, where } from 'firebase/firestore'
// import { db } from '../../services/firebase/firebaseConfig'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading} = useAsync(getProductsWithCategory, [categoryId])



    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true) 

    // useEffect(() => {
    //     setLoading(true)

    //     getProducts(categoryId)
    //     .then(products => {
    //         setProducts(products)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    //     .finally(()=>{
    //         setLoading(false)
    //     })

    // }, [categoryId])

    //     const productsRef = categoryId 
        
    //    ? query(collection(db, 'products'), where('category', '==', categoryId))
    //    : collection(db, 'products')

    //     getDocs(productsRef)
    //     .then(snapshot => {
    //         const productsAdapted = snapshot.docs.map(doc => {
    //             const data = doc.data()

    //             return { id: doc.id, ...data }
    //         })

    //         setProducts(productsAdapted)

    //     }).catch(err =>{
    //         console.log(err)
    //     }).finally(() =>{
    //         setLoading(false)
    //     })

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(products => {
        //         setProducts(products)
        // })
        //     .catch(err => {
        //         console.log(err)
        // })
        //     .finally(() => {
        //         setLoading(false)
        // })
   

  if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    if(error) {
        return (
            <div>
                <h1>Hubo un error</h1>
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