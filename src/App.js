import './App.css';
import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from './Notification/NotificationService';
import { CartProvider } from './context/CartContext';
import Cart from './Components/Cart/Cart';



const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar/>
              <Routes>
                <Route path='FacundoDominguezReact/' element ={<LandingPage/>}/>
                <Route path='/products' element={<ItemListContainer greeting={' Todos nuestros productos: '}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Algunos de nuestros productos: '}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path= '/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<h1>Checkout</h1>}/>
              </Routes>
            </CartProvider>
          </NotificationProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;