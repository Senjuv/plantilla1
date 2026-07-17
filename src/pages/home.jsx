import '../App.css';
import '../styles/body.css';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/acerca.css';
import '../styles/producto.css';
import '../styles/contact.css';
import '../styles/product.css';
import '../styles/service.css';
import Navbar from '../components/navbar';
import BodyMid from '../components/body';
import AcercaD from '../components/acerca';
import Service from '../components/servicios';
import Footer from '../components/footer';

function Home() {
    return (
        <div className="App">
            <Navbar />
            <BodyMid />
            <Service />
            <AcercaD />
            <Footer />
        </div>
    )
}

export default Home;