import Navbar from "../components/navbar";
import cafe from '../img/cafe.jpeg';
import Footer from '../components/footer';

function Producto() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections-p">
                <div className="infoProductP">
                    <img src={cafe} alt="Producto1" className='img-pinfo' />
                    <div className="Grid-inf">
                        <div className="item-p">
                            <h2 className="infoNameP">Capuccino</h2>
                            <h2 className="infoNameP">100$</h2>
                        </div>
                        <div className="Button-c">Comprar</div>
                    </div>
                </div>
                <hr className="hr-line"/>
                <div className="item-p">
                    <h2 className="infoNameP">Caracteristicas: </h2>
                    <h2 className="infoNameP">- A base de cafe<br />- 250gr<br />- Con cera de soya<br />- 10 * 10 cm<br />- Taza de vidrio<br /></h2>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Producto;