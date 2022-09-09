import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav>
      <header>
        <a id="titulo">VIBES ZONE</a>
      </header>
      <ul>
        <li>
          <a>INICIO</a>
        </li>
        <li>
          <a>SAHUMERIOS</a>
        </li>
        <li>
          <a>FRAGANCIAS</a>
        </li>
        <li>
          <a>VELAS</a>
        </li>
        <li>
          <a>PIEDRAS</a>
        </li>
        <li>
          <a>CONTACTO</a>
        </li>
      </ul>
      < CartWidget />
    </nav>
  );
}

export default Navbar;