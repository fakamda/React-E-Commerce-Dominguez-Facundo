import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getProductById } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = () => {
    const { itemId } = useParams()

    const getProductWithId = () => getProductById(itemId)

    const { data: product, error } = useAsync(getProductWithId, [itemId])

    if(error) {
        return (
            <div>
                <h1>Hubo un error</h1>
            </div>
        )
    }

    return(
        <div className="flex justify-center pt-14">
            <Link to='/products' className="bg-transparent hover:text-zinc-300 text-white font-semibold py-2 px-4 flex gap-2 absolute top-16 left-14"><IoMdArrowRoundBack className="text-2xl"/>Volver</Link>
            <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer