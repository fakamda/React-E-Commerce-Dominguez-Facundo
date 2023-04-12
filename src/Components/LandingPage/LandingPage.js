import "./LandingPage.css"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div className="w-screen h-screen fondo">
            <h1 className="text-white text-8xl texto">NPC STORE</h1>
            <p className="text-white mt-4">Bienvenido a nuestra tienda online, donde podes ver nuestra gran variedad de productos, con envios a todo el pais.</p>
            <Link to='/products' className=" bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-4 px-6 mt-8 boton shadow-md hover:shadow-xl">Ver Nuestros Productos</Link>
            <Link className="bg-transparent hover:text-zinc-300 text-white font-semibold py-2 px-4 boton2">Ver mas</Link>
        </div>
    )
}

export default LandingPage