import Navbar from "../components/navbar";
import Footer from '../components/footer';
import beige from '../img/beige.webp';
import lavander from '../img/lavandaaa.jpg';
function Contact() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections-c" id="productos">
                <div className="formContainer">
                    <h1>Contactenos</h1>
                    <br />
                    <div className="Form">
                    <form action="" >
                        <h1 className="tittleform">Nombre:</h1>
                        <input type="text" placeholder="Nombre y apellidos" className="input-t"/>
                        <h1 className="tittleform">Correo:</h1>
                        <input type="text" placeholder="Correo" className="input-t"/>
                        <h1 className="tittleform">Mensaje:</h1>
                        <input type="text" placeholder="Escribe un mensaje" className="Mesajeform"/>
                        <div className="Button-E">Enviar</div>
                    </form>
                    </div>
                </div>
                <div className="Pictures-c">
                <img src={beige} alt="Producto1" className='img-c1' />
                <img src={lavander} alt="Producto1" className='img-c2' />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;