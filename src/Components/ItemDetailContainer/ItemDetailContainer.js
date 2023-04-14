import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect( () => {
        // setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data }
                setProducts(productAdapted)
            })
            .catch(err =>{
                console.log(err)
            })


        // getProductsById(itemId)
        //     .then(response =>{
        //         setProducts(response)
        // })


    }, [itemId])

    // if(loading){
    //     return (
    //         <div>
    //             <h1>Cargando...</h1>
    //         </div>
    //     )
    // }

    return(
        <div className="flex justify-center pt-14">
            <Link to='/products' className="bg-transparent hover:text-zinc-300 text-white font-semibold py-2 px-4 flex gap-2 absolute top-16 left-14"><IoMdArrowRoundBack className="text-2xl"/>Volver</Link>
            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer