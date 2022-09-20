import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      < Navbar />
      <Routes>
        <Route path='/' element={ <ItemListContainer titulo="¡Bienvenido a VIBES ZONE!" subtitulo="CATALOGO DE PRODUCTOS"/> } />
        <Route path='/seccion/:idSection' element={<ItemListContainer titulo="¡Bienvenido a VIBES ZONE!" subtitulo="CATALOGO DE PRODUCTOS"/>} />
        <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;