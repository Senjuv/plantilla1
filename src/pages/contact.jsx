import Navbar from "../components/navbar";
import Footer from '../components/footer';

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections" id="productos">
                <div className="formContainer">
                    <div className="formTitle">
                        <h1>Contactate con nosotros:</h1>
                    </div>
                    <div className="Containerform">
                        <form action="" className="form-contact">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </form>
                        <div className="Button-c">Enviar</div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;