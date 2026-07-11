import Navbar from "../components/navbar";
import fondoG from '../img/fondoG.jpg';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Productos() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections-p" id="productos">
                <h2 className='Tittle-mid'>Nuestros Productos</h2>
                <div className="Grid-p">
                    <div>
                        <Link to="/product" ><img src={fondoG} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Producto 1</h2>
                            <h2 className="InfoName">$$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={fondoG} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Producto 2</h2>
                            <h2 className="InfoName">$$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={fondoG} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Producto 3</h2>
                            <h2 className="InfoName">$$</h2>
                        </div>
                    </div>

                    <div>
                        <Link to="/product" ><img src={fondoG} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Producto 4</h2>
                            <h2 className="InfoName">$$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={fondoG} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Producto 5</h2>
                            <h2 className="InfoName">$$</h2>
                        </div>
                    </div>
                    <div>
                        <Link to="/product" ><img src={fondoG} alt="Producto1" className='img-p' /></Link>
                        <div className="infoProduct">
                            <h2 className="InfoName">Producto 6</h2>
                            <h2 className="InfoName">$$</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Productos;