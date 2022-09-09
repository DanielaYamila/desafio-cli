import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      < Navbar />
      <main>
        {}
        < ItemListContainer name="Mandarine Posion" propiedad="Limon Dulce y Vainilla" valor="500"/>
        < ItemListContainer name="Amatyst" propiedad="Equilibrio de energias, Meditacion y energía" valor="600"/>
        < ItemListContainer name="Inciensos Blancos" propiedad="100% Natural y Artesanal" valor="500"/>
      </main>
    </>
  );
}

export default App;