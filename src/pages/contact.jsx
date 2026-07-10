import Navbar from "../components/navbar";
import Footer from '../components/footer';
import fondoG from '../img/fondoG.jpg';

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
                <img src={fondoG} alt="Producto1" className='img-c' />
            </section>
            <Footer />
        </div>
    )
}

export default Contact;