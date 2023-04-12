import CartWidget from '../CartWidget/CartWidget'
// import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
// import { collection, getDocs, query, orderBy } from 'firebase/firestore'
// import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //   const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))
  
    //   getDocs(categoriesRef)
    //     .then(snapshot => {
    //       const categoriesAdapted = snapshot.docs.map(doc => {
    //         const data = doc.data()
    //         return { id: doc.id, ...data}
    //       })
    //       setCategories(categoriesAdapted)
    //     })
    // }, [])

    return (
        <header className='fixed top-0 w-screen header h-14 z-50'>
            <nav className="flex justify-evenly items-center bg-transparent h-14 navbar">
            <Link to='FacundoDominguezReact' className='text-white text-xl logo-nav'>NPC STORE</Link>
                <div className="justify-center">
                    {/* {
                        categories.map(cat => {
                            return (
                                <NavLink key={cat.id} to={`/category/${cat.slug}`} className="btn-css bg-transparent text-white font-semibold hover:text-gray-200 py-2 px-4 mr-2 w-34">{cat.label}</NavLink>
                            )
                        })
                    } */}
                    <NavLink to='/products' className="btn-css bg-transparent text-white font-semibold hover:text-gray-200 py-2 px-4 mr-2 w-34" >Inicio</NavLink>
                    <NavLink to='/category/Componentes' className="btn-css bg-transparent text-white font-semibold hover:text-gray-200 py-2 px-4 mr-2 w-34">Componentes</NavLink>
                    <NavLink to='/category/Notebooks' className="btn-css bg-transparent text-white font-semibold hover:text-gray-200 py-2 px-4 mr-2 w-34">Notebooks</NavLink>
                    <NavLink to='/category/Accesorios' className="btn-css bg-transparent text-white font-semibold hover:text-gray-200 py-2 px-4 mr-2 w-34">Accesorios</NavLink>
                </div>
            <CartWidget/>
            </nav>
        </header>

    )
}

export default Navbar