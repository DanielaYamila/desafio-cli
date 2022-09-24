import './App.css';
import Navbar from './components/Navbar';
import CartContextContainer from './components/CartContext';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <CartContextContainer>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="¡Bienvenido a VIBES ZONE!" subtitulo="CATALOGO DE PRODUCTOS" />} />
        <Route path='/seccion/:idSection' element={<ItemListContainer titulo="¡Bienvenido a VIBES ZONE!" subtitulo="CATALOGO DE PRODUCTOS" />} />
        <Route path='/producto/:idItem' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </CartContextContainer>
  );
}

export default App;