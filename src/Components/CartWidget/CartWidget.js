import "./CartWidget.css"
import { useCart } from "../../context/CartContext";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";




const CartWidget = () => {
    const { totalQuantity } = useCart()
    return (
        <div className="text-white">
            <Link to="/cart" className="btn-cart text-2xl bg-inherit text-center text-white border-white w-16 h-10 flex justify-center items-center gap-3 hover:bg-violet-800 hover:bg-opacity-50 shadow-md hover:shadow-xl">
                <BsCart2/>
                <p className="text-base text-center">{totalQuantity} </p>
            </Link>
        </div>
    )
}

export default CartWidget