import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div className="panelFooter">
            <div>
                <Link to='/' className="titulo">VIBES ZONE</Link>
            </div>
            <div className="infoFooter">
                <span>Sobre NOSOTROS</span>
                <ul className="listaFooter">
                    <li>
                        <a href="https://www.argentina.gob.ar/terminos-y-condiciones">Terminos & Condiciones</a>
                    </li>
                    <li>
                        <a href="https://www.paypal.com/ar/webapps/mpp/benefits?kid=p72924514385">Metodos de pago</a>
                    </li>
                    <li>
                        <a href="https://www.buenosaires.gob.ar/contenido/detras-de-escena/detras-de-escena">Detras de VIBES ZONE</a>
                    </li>
                </ul>
            </div>
            <div className="infoFooter">
                <span>AYUDA</span>
                <ul className="listaFooter">
                    <li>
                        <a href="https://www.whatsapp.com/?lang=es">(+54)91123456789</a>
                    </li>
                    <li>
                        <a href="https://office.live.com/start/Outlook.aspx?omkt=es-CL&f=255&MSPPError=-2147217396">aura@comercialmanager.com</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ar/maps">1720 ARG, 4rd St, Suite 580. Pinamar</a>
                    </li>
                </ul>
            </div>
        </div>
        <p className="copy">©2022 VIBES ZONE, Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;