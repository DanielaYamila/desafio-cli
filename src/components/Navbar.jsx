import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <header>
        <Link to='/' className="titulo">VIBES ZONE</Link>
      </header>
      <ul className="listNavbar">
        <li>
          <Link to='/'>INICIO</Link>
        </li>
        <li>
          <Link to='/seccion/11'>SAHUMERIOS</Link>
        </li>
        <li>
          <Link to='/seccion/22'>FRAGANCIAS</Link>
        </li>
        <li>
          <Link to='/seccion/33'>VELAS</Link>
        </li>
        <li>
          <Link to='/seccion/44'>CUARZOS</Link>
        </li>
        <li>
          <Link to='/contacto'>CONTACTO</Link>
        </li>
      </ul>
      <div className="counterCompra">
        <Link className="carrito" to='/carrito'> <CartWidget/> </Link>
      </div>
    </nav>
  );
}

export default Navbar;