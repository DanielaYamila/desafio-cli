import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      < Navbar />
      <main>
        {}
        < ItemListContainer titulo="¡Bienvenido a VIBES ZONE!" subtitulo="CATALOGO DE PRODUCTOS"/>
      </main>
    </>
  );
}

export default App;