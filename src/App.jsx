import './App.css';
import Navbar from './components/Navbar';
import CartContextContainer from './components/CartContext';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <CartContextContainer>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="¡Bienvenido a VIBES ZONE!" subtitulo="KEEP IT SWEET, KEEP IT CRUELTRY FREE" />} />
        <Route path='/seccion/:idSection' element={<ItemListContainer titulo="" subtitulo="CATALOGO DE PRODUCTOS" />} />
        <Route path='/producto/:idItem' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart/>} />
        <Route path='/contacto' element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextContainer>
  );
}

export default App;