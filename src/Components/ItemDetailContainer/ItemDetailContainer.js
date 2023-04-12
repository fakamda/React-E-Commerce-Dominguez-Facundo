import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    const { itemId } = useParams()

    useEffect( () => {
        getProductsById(itemId)
            .then(response =>{
                setProducts(response)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [itemId])

    return(
        <div className="flex justify-center pt-14">
            <Link to='/products' className="bg-transparent hover:text-zinc-300 text-white font-semibold py-2 px-4 flex gap-2 absolute top-16 left-14"><IoMdArrowRoundBack className="text-2xl"/>Volver</Link>
            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer