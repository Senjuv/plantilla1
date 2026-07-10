import Navbar from "../components/navbar";
import fondoG from '../img/fondoG.jpg';
import Footer from '../components/footer';

function Producto() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections-p">
                <div className="infoProduct">
                    <img src={fondoG} alt="Producto1" className='img-i' />
                    <div className="Grid-inf">
                        <div className="item-p">
                            <h2 className="infoNameP">Producto 1</h2>
                            <h2 className="infoNameP">$$</h2>
                        </div>
                        <div className="Button-c">Comprar</div>
                    </div>
                </div>
                <div className="item-p">
                    <h2 className="infoNameP">Informacion del producto </h2>
                    <h2 className="infoNameP">-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br /></h2>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Producto;