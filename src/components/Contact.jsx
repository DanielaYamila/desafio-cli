
const Contact = () => {

    return (
        <div className="contacto">
            <div className="redes">
                <h2>REDES SOCIALES</h2>
                <ul>
                    <li>
                        <a href="https://www.tumblr.com/">
                            <img src="https://img.icons8.com/ios-filled/40/undefined/tumblr--v2.png" alt="Icono de Tumblr"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <img src="https://img.icons8.com/ios-filled/40/undefined/twitter.png" alt="Icono de Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/">
                            <img src="https://img.icons8.com/ios-filled/40/undefined/behance.png" alt="Icono de Behance"/>
                        </a>
                    </li>
                </ul>
            </div>
            <form>
                <div className="formulario">
                    <h2>FORMULARIO DE CONTACTO</h2>
                    <div>
                        <input type="text" className="form-control" placeholder="Nombre/s" aria-label="Nombre/s" />
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Apellido/s" aria-label="Apellido/s" />
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" />
                    </div>
                    <div>
                        <label for="inputCity" className="form-label"> <strong>Ciudad:</strong> </label> <br />
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label"> <strong>País:</strong> </label> <br />
                        <select className="form-select">
                            <option selected>ARG</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>AUS</option>
                            <option>SP</option>
                            <option>BR</option>
                            <option>UR</option>
                            <option>PR</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label"> <strong>Motivo por el que nos contacta:</strong> </label> <br />
                        <select className="form-select">
                            <option selected>Trabajo</option>
                            <option>Negocios</option>
                            <option>Asociación</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label"> <strong>Espacio para presentarse:</strong> </label> <br />
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;