import Navbar from "../components/navbar";
import fondoG from '../img/fondoG.jpg';

function Producto() {
    return (
        <div className="App">
            <Navbar />
            <section className="sections" id="productos">
                <div className="infoProduct">
                    <img src={fondoG} alt="Producto1" className='img-i' />
                    <div>
                        <h2 className="InfoName">Producto 1</h2>
                        <h2 className="InfoName">$$</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Producto;