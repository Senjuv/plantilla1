import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <section id="inicio">
                <header className="App-header">
                    <h2 className='Title-nav'><HashLink smooth to="/#inicio" className='link-a'>LOGOTIPO</HashLink></h2>
                    <div className='items'>
                        <p className='list-nav'><HashLink smooth to="/#inicio" className='link-a'>INICIO</HashLink></p>
                        <p className='list-nav'><HashLink smooth to="/#acerca" className='link-a'>ACERCA DE</HashLink></p>
                        <p className='list-nav'><Link  to="/productos" className="link-a">PRODUCTOS</Link></p>
                        <p className='list-nav'><Link  to="/contact" className="link-a">CONTACTANOS</Link></p>
                    </div>
                </header>
            </section>
        </>
    )
}

export default Navbar;