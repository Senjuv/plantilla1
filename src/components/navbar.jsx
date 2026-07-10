import { HashLink } from "react-router-hash-link";

function Navbar() {
    return (
        <>
            <section id="inicio">
                <header className="App-header">
                    <h2 className='Title-nav'><HashLink smooth to="/#inicio" className='link-a'>LOGOTIPO</HashLink></h2>
                    <div className='items'>
                        <p className='list-nav'><HashLink smooth to="/#inicio" className='link-a'>INICIO</HashLink></p>
                        <p className='list-nav'><HashLink smooth to="/#acerca" className='link-a'>ACERCA DE</HashLink></p>
                        <p className='list-nav'><HashLink smooth to="/productos" className="link-a">PRODUCTOS</HashLink></p>
                        <p className='list-nav'>CONTACTA</p>
                    </div>
                </header>
            </section>
        </>
    )
}

export default Navbar;