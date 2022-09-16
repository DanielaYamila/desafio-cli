import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav>
      <header>
        <a id="titulo">VIBES ZONE</a>
      </header>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">SAHUMERIOS</a>
        </li>
        <li>
          <a href="#">FRAGANCIAS</a>
        </li>
        <li>
          <a href="#">VELAS</a>
        </li>
        <li>
          <a href="#">PIEDRAS</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </ul>
      < CartWidget />
    </nav>
  );
}

export default Navbar;