import Navbar from "../components/navbar";
import fondoG from '../img/fondoG.jpg';
import Footer from '../components/footer';

import oso from '../img/osito.jpeg';
import lavanda2 from '../img/lavanda2.jpeg';
import verde from '../img/verde.jpeg';
import cuatro from '../img/cuatro.jpeg';
import capuccino from '../img/cafe.jpeg';
import mariposa from '../img/mariposa (1).jpeg';
import { Link } from 'react-router-dom';

function Productos() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections-p" id="productos">
                <h2 className='Tittle-mid'>Nuestros Productos</h2>
                <div className="Grid-p">
                    <div>
                        <Link to="/product" ><img src={oso} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Osito</h2>
                            <h2 className="InfoName">150$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={lavanda2} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Lavanda con chia</h2>
                            <h2 className="InfoName">100$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={verde} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Limon con fresa</h2>
                            <h2 className="InfoName">100$</h2>
                        </div>
                    </div>

                    <div>
                        <Link to="/product" ><img src={cuatro} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Luma</h2>
                            <h2 className="InfoName">150$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={capuccino} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Capuccino</h2>
                            <h2 className="InfoName">100$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={mariposa} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Mariposita</h2>
                            <h2 className="InfoName">150$</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Productos;